import type { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('beans')
    .addColumn('id', 'serial', (column) => column.primaryKey())
    .addColumn('name', 'text', (column) => column.notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  db.schema.dropTable('beans');
}
