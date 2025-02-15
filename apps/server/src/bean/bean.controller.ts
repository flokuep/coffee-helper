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
import { ApiBearerAuth } from '@nestjs/swagger';
import { CurrentGroup } from 'src/auth/group.decorator';
import { AuthenticatedGroupDto } from 'src/group/dto/authenticated-group.dto';

@ApiBearerAuth('defaultBearerAuth')
@Controller('api/bean')
export class BeanController {
  constructor(private readonly beansService: BeanService) {}

  @Post()
  create(
    @CurrentGroup() group: AuthenticatedGroupDto,
    @Body() createBeanDto: CreateBeanDto,
  ): Promise<Bean> {
    return this.beansService.create(group.userId, createBeanDto);
  }

  @Get()
  findAll(@CurrentGroup() group: AuthenticatedGroupDto): Promise<Bean[]> {
    return this.beansService.findAll(group.userId);
  }

  @Get(':id')
  findOne(
    @CurrentGroup() group: AuthenticatedGroupDto,
    @Param('id') id: number,
  ): Promise<Bean> {
    return this.beansService.findOne(group.userId, +id);
  }

  @Patch(':id')
  update(
    @CurrentGroup() group: AuthenticatedGroupDto,
    @Param('id') id: number,
    @Body() updateBeanDto: UpdateBeanDto,
  ): Promise<UpdateBeanResponseDto> {
    return this.beansService.update(group.userId, +id, updateBeanDto);
  }

  @Delete(':id')
  remove(
    @CurrentGroup() group: AuthenticatedGroupDto,
    @Param('id') id: number,
  ) {
    return this.beansService.remove(group.userId, +id);
  }
}
