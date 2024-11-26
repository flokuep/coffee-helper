import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExtractionDto } from './dto/create-extraction.dto';
import { UpdateExtractionDto } from './dto/update-extraction.dto';
import { databaseSchema } from 'src/database/database-schema';
import { DrizzleService } from 'src/database/drizzle.service';
import { eq } from 'drizzle-orm';

@Injectable()
export class ExtractionService {
  constructor(private readonly drizzleService: DrizzleService) {}

  async create(beanId: number, createExtractionDto: CreateExtractionDto) {
    const createdExtraction = await this.drizzleService.db
      .insert(databaseSchema.extractions)
      .values({ beanId, ...createExtractionDto })
      .returning();

    return createdExtraction.pop();
  }

  findAllForBean(beanId: number) {
    return this.drizzleService.db
      .select()
      .from(databaseSchema.extractions)
      .where(eq(databaseSchema.extractions.beanId, beanId));
  }

  async findOne(id: number) {
    const extractions = await this.drizzleService.db
      .select()
      .from(databaseSchema.extractions)
      .where(eq(databaseSchema.extractions.id, id));

    const extraction = extractions.pop();

    if (!extraction) {
      throw new NotFoundException();
    }

    return extraction;
  }

  async update(id: number, updateExtractionDto: UpdateExtractionDto) {
    const updatedExtraction = await this.drizzleService.db
      .update(databaseSchema.extractions)
      .set(updateExtractionDto)
      .where(eq(databaseSchema.extractions.id, id))
      .returning();

    if (updatedExtraction.length === 0) {
      throw new NotFoundException();
    }

    return updatedExtraction.pop();
  }

  async remove(id: number) {
    const deletedExtraction = await this.drizzleService.db
      .delete(databaseSchema.extractions)
      .where(eq(databaseSchema.extractions.id, id))
      .returning();

    if (deletedExtraction.length === 0) {
      throw new NotFoundException();
    }
  }
}
