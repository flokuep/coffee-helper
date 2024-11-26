import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBeanDto } from './dto/create-bean.dto';
import { UpdateBeanDto } from './dto/update-bean.dto';
import { DrizzleService } from 'src/database/drizzle.service';
import { databaseSchema } from 'src/database/database-schema';
import { eq } from 'drizzle-orm';
import { Bean } from './entities/bean.entity';

@Injectable()
export class BeansService {
  constructor(private readonly drizzleService: DrizzleService) {}

  async create(createBeanDto: CreateBeanDto): Promise<Bean> {
    const createdBean = await this.drizzleService.db
      .insert(databaseSchema.beans)
      .values(createBeanDto)
      .returning();

    return createdBean.pop();
  }

  findAll(): Promise<Bean[]> {
    return this.drizzleService.db.select().from(databaseSchema.beans);
  }

  async findOne(id: number): Promise<Bean> {
    const beans = await this.drizzleService.db
      .select()
      .from(databaseSchema.beans)
      .where(eq(databaseSchema.beans.id, id));

    const bean = beans.pop();

    if (!bean) {
      throw new NotFoundException();
    }

    return bean;
  }

  async update(id: number, updateBeanDto: UpdateBeanDto): Promise<Bean> {
    const updatedBean = await this.drizzleService.db
      .update(databaseSchema.beans)
      .set(updateBeanDto)
      .where(eq(databaseSchema.beans.id, id))
      .returning();

    if (updatedBean.length === 0) {
      throw new NotFoundException();
    }

    return updatedBean.pop();
  }

  async remove(id: number) {
    const deletedBean = await this.drizzleService.db
      .delete(databaseSchema.beans)
      .where(eq(databaseSchema.beans.id, id))
      .returning();

    if (deletedBean.length === 0) {
      throw new NotFoundException();
    }
  }
}
