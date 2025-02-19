CREATE TYPE "public"."extraction_flow" AS ENUM('very slow', 'slow', 'perfect', 'fast', 'very fast');--> statement-breakpoint
CREATE TYPE "public"."extraction_profile" AS ENUM('very sour', 'sour', 'perfect', 'bitter', 'very bitter');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "beans" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"manufacturer" text,
	"profile" text,
	"notes" text,
	"group_id" serial NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "extractions" (
	"id" serial PRIMARY KEY NOT NULL,
	"bean_id" serial NOT NULL,
	"grind" real,
	"in" real,
	"out" real,
	"time" real,
	"profile" "extraction_profile",
	"flow" "extraction_flow",
	"next_extraction_hint" text,
	"barista" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"token" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "beans" ADD CONSTRAINT "beans_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "extractions" ADD CONSTRAINT "extractions_bean_id_beans_id_fk" FOREIGN KEY ("bean_id") REFERENCES "public"."beans"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
