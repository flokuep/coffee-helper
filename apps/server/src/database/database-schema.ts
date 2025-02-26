import { relations } from 'drizzle-orm';
import {
  serial,
  text,
  pgTable,
  timestamp,
  real,
  pgEnum,
  boolean,
} from 'drizzle-orm/pg-core';

export const beans = pgTable('beans', {
  id: serial().primaryKey(),
  name: text(),
  manufacturer: text(),
  profile: text(),
  notes: text(),
  decaf: boolean().default(false),
  groupId: serial().references(() => groups.id),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp()
    .notNull()
    .defaultNow()
    //TODO Date is in wrong timezone
    .$onUpdate(() => new Date()),
});

export const beansRelations = relations(beans, ({ many, one }) => ({
  extractions: many(extractions),
  group: one(groups, {
    fields: [beans.groupId],
    references: [groups.id],
  }),
}));

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
  grind: real(),
  in: real(),
  out: real(),
  time: real(),
  profile: extractionProfile(),
  flow: extractionFlow(),
  nextExtractionHint: text(),
  barista: text(),
  createdAt: timestamp().notNull().defaultNow(),
});

export const extractionsRelations = relations(extractions, ({ one }) => ({
  bean: one(beans, {
    fields: [extractions.beanId],
    references: [beans.id],
  }),
}));

export const groups = pgTable('groups', {
  id: serial().primaryKey(),
  name: text(),
  token: text(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp()
    .notNull()
    .defaultNow()
    //TODO Date is in wrong timezone
    .$onUpdate(() => new Date()),
});

export const groupsRelations = relations(groups, ({ many }) => ({
  beans: many(beans),
}));

export const databaseSchema = {
  beans,
  beansRelations,
  extractions,
  extractionProfile,
  extractionFlow,
  extractionsRelations,
  groups,
  groupsRelations,
};
