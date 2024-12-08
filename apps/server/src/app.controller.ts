import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { TokenAuthGuard } from './auth/token-auth.guard';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(TokenAuthGuard)
  @Public()
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(TokenAuthGuard)
  @Post('auth/logout')
  async logout(@Request() req) {
    return req.logout();
  }
}
