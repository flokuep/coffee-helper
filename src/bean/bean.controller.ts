import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BeanService } from './bean.service';
import { CreateBeanDto } from './dto/create-bean.dto';
import { UpdateBeanDto } from './dto/update-bean.dto';
import { Bean } from './entities/bean.entity';
import { UpdateBeanResponseDto } from './dto/update-bean-response.dto';

@Controller('bean')
export class BeanController {
  constructor(private readonly beansService: BeanService) {}

  @Post()
  create(@Body() createBeanDto: CreateBeanDto): Promise<Bean> {
    return this.beansService.create(createBeanDto);
  }

  @Get()
  findAll(): Promise<Bean[]> {
    return this.beansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Bean> {
    return this.beansService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBeanDto: UpdateBeanDto,
  ): Promise<UpdateBeanResponseDto> {
    return this.beansService.update(+id, updateBeanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beansService.remove(+id);
  }
}
