import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExtractionService } from './extraction.service';
import { CreateExtractionDto } from './dto/create-extraction.dto';
import { UpdateExtractionDto } from './dto/update-extraction.dto';
import { Extraction } from './entities/extraction.entity';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('defaultBearerAuth')
@Controller('extraction')
export class ExtractionController {
  constructor(private readonly extractionService: ExtractionService) {}

  @Post(':beanId')
  create(
    @Param('beanId') beanId: number,
    @Body() createExtractionDto: CreateExtractionDto,
  ): Promise<Extraction> {
    return this.extractionService.create(beanId, createExtractionDto);
  }

  @Get('for-bean/:beanId')
  findAllForBean(@Param('beanId') beanId: number): Promise<Extraction[]> {
    return this.extractionService.findAllForBean(beanId);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Extraction> {
    return this.extractionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateExtractionDto: UpdateExtractionDto,
  ): Promise<Extraction> {
    return this.extractionService.update(+id, updateExtractionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.extractionService.remove(+id);
  }
}
