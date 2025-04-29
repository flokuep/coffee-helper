import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExtractionDto } from './dto/create-extraction.dto';
import { UpdateExtractionDto } from './dto/update-extraction.dto';
import {
  databaseSchema,
  extractionFlow,
  extractionProfile,
} from 'src/database/database-schema';
import { DrizzleService } from 'src/database/drizzle.service';
import { eq } from 'drizzle-orm';
import { Extraction } from './entities/extraction.entity';

@Injectable()
export class ExtractionService {
  constructor(private readonly drizzleService: DrizzleService) {}

  async create(
    beanId: number,
    createExtractionDto: CreateExtractionDto,
  ): Promise<Extraction> {
    const profile = extractionProfile.enumValues.find(
      (val) => val === createExtractionDto.profile,
    );
    const flow = extractionFlow.enumValues.find(
      (val) => val === createExtractionDto.flow,
    );

    const createdExtraction = await this.drizzleService.db
      .insert(databaseSchema.extractions)
      .values({ beanId, ...createExtractionDto, profile: profile, flow: flow })
      .returning();

    return createdExtraction.pop();
  }

  findAllForBean(beanId: number): Promise<Extraction[]> {
    return this.drizzleService.db.query.extractions.findMany({
      where: eq(databaseSchema.extractions.beanId, beanId),
    });
  }

  async findOne(id: number): Promise<Extraction> {
    const extraction = await this.drizzleService.db.query.extractions.findFirst(
      {
        where: eq(databaseSchema.extractions.id, id),
      },
    );

    if (!extraction) {
      throw new NotFoundException();
    }

    return extraction;
  }

  async update(
    id: number,
    updateExtractionDto: UpdateExtractionDto,
  ): Promise<Extraction> {
    const profile = extractionProfile.enumValues.find(
      (val) => val === updateExtractionDto.profile,
    );
    const flow = extractionFlow.enumValues.find(
      (val) => val === updateExtractionDto.flow,
    );
    const updatedExtraction = await this.drizzleService.db
      .update(databaseSchema.extractions)
      .set({ ...updateExtractionDto, flow: flow, profile: profile })
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
