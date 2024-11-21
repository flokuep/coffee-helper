import {
	Kysely,
	Migrator,
	PostgresDialect,
	FileMigrationProvider,
  } from 'kysely';
import { Pool } from 'pg';
import { defineConfig } from 'kysely-ctl'
import { ConfigService } from '@nestjs/config';
 
const configService = new ConfigService();

export default defineConfig({
	// replace me with a real dialect instance OR a dialect name + `dialectConfig` prop.
	dialect: new PostgresDialect({
		pool: new Pool({
		  host: configService.get('POSTGRES_HOST'),
		  port: configService.get('POSTGRES_PORT'),
		  user: configService.get('POSTGRES_USER'),
		  password: configService.get('POSTGRES_PASSWORD'),
		  database: configService.get('POSTGRES_DB'),
		}),
	  }),
	migrations: {
		migrationFolder: "migrations",
	},
	//   plugins: [],
	//   seeds: {
	//     seedFolder: "seeds",
	//   }
})
