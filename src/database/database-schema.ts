import { serial, text, pgTable, timestamp } from 'drizzle-orm/pg-core';

export const beans = pgTable('beans', {
  id: serial('id').primaryKey(),
  name: text('name'),
  manufacturer: text('manufacturer'),
  profile: text('profile'),
  notes: text('notes'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const databaseSchema = {
  beans,
};
