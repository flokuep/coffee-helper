import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

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
  @IsPositive()
  time?: number;

  @IsOptional()
  @IsNumber()
  grind?: number;

  @IsOptional()
  profile?: string;

  @IsOptional()
  flow?: string;

  @IsOptional()
  @IsString()
  nextExtractionHint?: string;

  @IsOptional()
  @IsString()
  barista?: string;
}
