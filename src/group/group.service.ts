import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { DrizzleService } from 'src/database/drizzle.service';
import { databaseSchema } from 'src/database/database-schema';
import { eq } from 'drizzle-orm';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {
  constructor(private readonly drizzleService: DrizzleService) {}

  async create(createGroupDto: CreateGroupDto): Promise<Group> {
    const createdGroup = await this.drizzleService.db
      .insert(databaseSchema.groups)
      .values(createGroupDto)
      .returning();

    return createdGroup.pop();
  }

  findOne(token: string): Promise<Group> {
    return this.drizzleService.db.query.groups.findFirst({
      where: eq(databaseSchema.groups.token, token),
    });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto): Promise<Group> {
    const updatedGroup = await this.drizzleService.db
      .update(databaseSchema.groups)
      .set(updateGroupDto)
      .where(eq(databaseSchema.groups.id, id))
      .returning();

    if (updatedGroup.length === 0) {
      throw new NotFoundException();
    }

    return updatedGroup.pop();
  }

  async remove(id: number) {
    const deletedGroup = await this.drizzleService.db
      .delete(databaseSchema.groups)
      .where(eq(databaseSchema.groups, id))
      .returning();

    if (!deletedGroup) {
      throw new NotFoundException();
    }
  }
}
