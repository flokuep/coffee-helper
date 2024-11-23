import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBeanDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  manufacturer: string;

  @IsString()
  profile: string;

  @IsString()
  notes: string;
}
