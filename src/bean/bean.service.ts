import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBeanDto } from './dto/create-bean.dto';
import { UpdateBeanDto } from './dto/update-bean.dto';
import { DrizzleService } from 'src/database/drizzle.service';
import { databaseSchema } from 'src/database/database-schema';
import { eq } from 'drizzle-orm';
import { Bean } from './entities/bean.entity';
import { UpdateBeanResponseDto } from './dto/update-bean-response.dto';

@Injectable()
export class BeanService {
  constructor(private readonly drizzleService: DrizzleService) {}

  async create(createBeanDto: CreateBeanDto): Promise<Bean> {
    const createdBean = await this.drizzleService.db
      .insert(databaseSchema.beans)
      .values(createBeanDto)
      .returning();

    return { ...createdBean.pop(), extractions: [] };
  }

  findAll(): Promise<Bean[]> {
    return this.drizzleService.db.query.beans.findMany({
      with: {
        extractions: {
          orderBy: (extractions, { desc }) => [desc(extractions.createdAt)],
        },
      },
    });
  }

  async findOne(id: number): Promise<Bean> {
    const bean = await this.drizzleService.db.query.beans.findFirst({
      where: eq(databaseSchema.beans.id, id),
      with: {
        extractions: {
          orderBy: (extractions, { desc }) => [desc(extractions.createdAt)],
        },
      },
    });

    if (!bean) {
      throw new NotFoundException();
    }

    return bean;
  }

  async update(
    id: number,
    updateBeanDto: UpdateBeanDto,
  ): Promise<UpdateBeanResponseDto> {
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
