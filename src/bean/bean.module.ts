import { Module } from '@nestjs/common';
import { BeanService } from './bean.service';
import { BeanController } from './bean.controller';

@Module({
  controllers: [BeanController],
  providers: [BeanService],
})
export class BeanModule {}
