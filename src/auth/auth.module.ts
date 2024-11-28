import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GroupModule } from 'src/group/group.module';
import { PassportModule } from '@nestjs/passport';
import { TokenStrategy } from './token.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    GroupModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, TokenStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
