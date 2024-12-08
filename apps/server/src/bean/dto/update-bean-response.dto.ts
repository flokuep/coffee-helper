import { OmitType } from '@nestjs/mapped-types';
import { Bean } from '../entities/bean.entity';

export class UpdateBeanResponseDto extends OmitType(Bean, [
  'extractions' as const,
]) {}
