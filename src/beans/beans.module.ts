import { Module } from '@nestjs/common';
import { BeansService } from './beans.service';
import { BeansController } from './beans.controller';
import { Bean } from './entities/bean.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bean])],
  controllers: [BeansController],
  providers: [BeansService],
})
export class BeansModule {}
