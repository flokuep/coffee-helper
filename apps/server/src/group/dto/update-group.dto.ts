import { CreateGroupDto } from './create-group.dto';
import { OmitType } from '@nestjs/mapped-types';

export class UpdateGroupDto extends OmitType(CreateGroupDto, [
  'token' as const,
]) {}
