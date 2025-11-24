import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitSchema1763745166201 implements MigrationInterface {
  name = 'InitSchema1763745166201';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Enable uuid-ossp for uuid_generate_v4()
    await queryRunner.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_extension WHERE extname = 'uuid-ossp'
        ) THEN
          CREATE EXTENSION "uuid-ossp";
        END IF;
      END$$;
    `);

    // ENUM type (schema-qualified)
    await queryRunner.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_type WHERE typname = 'deals_status_enum'
        ) THEN
          CREATE TYPE "public"."deals_status_enum"
          AS ENUM ('NEW', 'IN_PROGRESS', 'WON', 'LOST');
        END IF;
      END$$;
    `);

    // Clients table
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "clients" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" varchar(150) NOT NULL,
        "email" varchar(254) NOT NULL,
        "phone" varchar(30),
        "created_at" timestamptz NOT NULL DEFAULT now(),
        "updated_at" timestamptz NOT NULL DEFAULT now(),
        CONSTRAINT "pk_clients_id" PRIMARY KEY ("id"),
        CONSTRAINT "uq_clients_email" UNIQUE ("email")
      );
    `);

    // Deals table
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "deals" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "title" varchar(200) NOT NULL,
        "amount" numeric(12,2) NOT NULL,
        "status" "public"."deals_status_enum" NOT NULL DEFAULT 'NEW',
        "created_at" timestamptz NOT NULL DEFAULT now(),
        "updated_at" timestamptz NOT NULL DEFAULT now(),
        "clientId" uuid NOT NULL,
        CONSTRAINT "pk_deals_id" PRIMARY KEY ("id")
      );
    `);

    // FK (consistent name)
    await queryRunner.query(`
      ALTER TABLE "deals"
      ADD CONSTRAINT "fk_deals_client"
      FOREIGN KEY ("clientId") REFERENCES "clients"("id")
      ON DELETE CASCADE ON UPDATE CASCADE;
    `);

    // Helpful indexes
    await queryRunner.query(`
      CREATE INDEX IF NOT EXISTS "idx_deals_clientId" ON "deals" ("clientId");
      CREATE INDEX IF NOT EXISTS "idx_deals_status" ON "deals" ("status");
      CREATE INDEX IF NOT EXISTS "idx_clients_email" ON "clients" ("email");
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop FK first
    await queryRunner.query(`
      ALTER TABLE "deals" DROP CONSTRAINT IF EXISTS "fk_deals_client";
    `);

    // Drop indexes
    await queryRunner.query(`DROP INDEX IF EXISTS "idx_deals_clientId";`);
    await queryRunner.query(`DROP INDEX IF EXISTS "idx_deals_status";`);
    await queryRunner.query(`DROP INDEX IF EXISTS "idx_clients_email";`);

    // Drop tables
    await queryRunner.query(`DROP TABLE IF EXISTS "deals" CASCADE;`);
    await queryRunner.query(`DROP TABLE IF EXISTS "clients" CASCADE;`);

    // Drop ENUM
    await queryRunner.query(
      `DROP TYPE IF EXISTS "public"."deals_status_enum" CASCADE;`,
    );
  }
}
