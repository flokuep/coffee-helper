import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBeanDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  manufacturer: string;

  @IsString()
  profile?: string;

  @IsString()
  notes?: string;
}
