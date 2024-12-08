ALTER TABLE "beans" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "beans" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;