import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-unique-token';
import { AuthService } from './auth.service';

@Injectable()
export class TokenStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(token: string) {
    const group = await this.authService.validateGroup(token);
    if (!group) {
      throw new UnauthorizedException();
    }

    return group;
  }
}
