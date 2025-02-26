import { Extraction } from 'src/extraction/entities/extraction.entity';

export class Bean {
  id: number;
  name: string;
  manufacturer: string;
  decaf: boolean;
  profile?: string;
  notes?: string;
  extractions: Extraction[];
  createdAt: Date;
  updatedAt: Date;
}
