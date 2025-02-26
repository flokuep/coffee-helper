import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBeanDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  manufacturer: string;

  @IsNotEmpty()
  @IsBoolean()
  decaf: boolean;

  @IsString()
  @IsOptional()
  profile?: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
