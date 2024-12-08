import { Module } from '@nestjs/common';
import { BeanService } from './bean.service';
import { BeanController } from './bean.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  controllers: [BeanController],
  providers: [
    BeanService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class BeanModule {}
