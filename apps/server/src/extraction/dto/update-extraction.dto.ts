import { PartialType } from '@nestjs/swagger';
import { CreateExtractionDto } from './create-extraction.dto';

export class UpdateExtractionDto extends PartialType(CreateExtractionDto) {}
