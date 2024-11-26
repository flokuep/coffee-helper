import { IsInt, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateExtractionDto {
  @IsNumber()
  @IsPositive()
  in?: number;

  @IsNumber()
  @IsPositive()
  out?: number;

  @IsInt()
  @IsPositive()
  time?: number;

  profile?: string;
  flow?: string;

  @IsString()
  nextExtractionHint?: string;

  @IsString()
  barista?: string;
}
