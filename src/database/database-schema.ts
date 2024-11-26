import { sql } from 'drizzle-orm';
import {
  serial,
  text,
  pgTable,
  timestamp,
  real,
  pgEnum,
} from 'drizzle-orm/pg-core';

export const beans = pgTable('beans', {
  id: serial().primaryKey(),
  name: text(),
  manufacturer: text(),
  profile: text(),
  notes: text(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp()
    .notNull()
    .defaultNow()
    .$onUpdate(() => sql`now()`),
});

export const extractionProfile = pgEnum('extraction_profile', [
  'very sour',
  'sour',
  'perfect',
  'bitter',
  'very bitter',
]);
export const extractionFlow = pgEnum('extraction_flow', [
  'very slow',
  'slow',
  'perfect',
  'fast',
  'very fast',
]);

export const extractions = pgTable('extractions', {
  id: serial().primaryKey(),
  beanId: serial().references(() => beans.id),
  in: real(),
  out: real(),
  time: real(),
  profile: extractionProfile(),
  flow: extractionFlow(),
  nextExtractionHint: text(),
  barista: text(),
  createdAt: timestamp().notNull().defaultNow(),
});

export const databaseSchema = {
  beans,
};
