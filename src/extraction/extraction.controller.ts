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

@Controller('extraction')
export class ExtractionController {
  constructor(private readonly extractionService: ExtractionService) {}

  @Post(':beanId')
  create(
    @Param('beanId') beanId: number,
    @Body() createExtractionDto: CreateExtractionDto,
  ) {
    return this.extractionService.create(beanId, createExtractionDto);
  }

  @Get(':beanId')
  findAllForBean(@Param('beanId') beanId: number) {
    return this.extractionService.findAllForBean(beanId);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.extractionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateExtractionDto: UpdateExtractionDto,
  ) {
    return this.extractionService.update(+id, updateExtractionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.extractionService.remove(+id);
  }
}
