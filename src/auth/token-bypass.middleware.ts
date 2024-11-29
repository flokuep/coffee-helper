import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class TokenBypassMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = this.configService.get('GROUP_TOKEN');
    if (token) {
      const group = await this.authService.validateGroup(token);
      if (group) {
        const jwt = await this.authService.login(group);
        req.headers.authorization = `Bearer ${jwt.accessToken}`;
      } else {
        console.error(`Cannot find group by configured GROUP_TOKEN "${token}"`);
      }
    }

    next();
  }
}
