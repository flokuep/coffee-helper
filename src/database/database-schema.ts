import { serial, text, pgTable } from 'drizzle-orm/pg-core';

export const beans = pgTable('beans', {
  id: serial('id').primaryKey(),
  name: text('name'),
  manufacturer: text('manufacturer'),
  profile: text('profile'),
  notes: text('notes'),
});

export const databaseSchema = {
  beans,
};
