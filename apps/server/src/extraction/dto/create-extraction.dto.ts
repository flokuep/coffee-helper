import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateExtractionDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  in?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  out?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  time?: number;

  @IsOptional()
  profile?: string;
  flow?: string;

  @IsOptional()
  @IsString()
  nextExtractionHint?: string;

  @IsOptional()
  @IsString()
  barista?: string;
}
