import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1684275633509 implements MigrationInterface {
    name = 'CreateTables1684275633509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "file" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "path" character varying NOT NULL, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "status" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying, "password" character varying, "provider" character varying NOT NULL DEFAULT 'email', "socialId" character varying, "fullName" character varying NOT NULL, "stripeCustomerId" character varying, "otp" character varying, "twoFactorAuth" boolean DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "photoId" uuid, "roleId" integer, "statusId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_783ffd81ccc0fc1e23b9b45d9d" ON "user" ("provider") `);
        await queryRunner.query(`CREATE INDEX "IDX_035190f70c9aff0ef331258d28" ON "user" ("fullName") `);
        await queryRunner.query(`CREATE INDEX "IDX_05b9b166723117ccaa8a2fa8fb" ON "user" ("otp") `);
        await queryRunner.query(`CREATE TABLE "keyword" ("id" SERIAL NOT NULL, "letters" character varying NOT NULL, "slug" character varying NOT NULL, "featured" boolean NOT NULL DEFAULT false, "sublink" character varying, "location" jsonb, "price" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "UQ_7f77629ad9b2b31dea1339fbfd4" UNIQUE ("letters"), CONSTRAINT "UQ_8e69439d9ee6cbaafd09c3d20c2" UNIQUE ("slug"), CONSTRAINT "PK_affdb8c8fa5b442900cb3aa21dc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a5072e1cad201e2caf5efa7e8c" ON "keyword" ("userId") `);
        await queryRunner.query(`CREATE TABLE "forgot" ("id" SERIAL NOT NULL, "otp" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_087959f5bb89da4ce3d763eab75" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "refresh" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "token" character varying NOT NULL, "tokenUsed" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_9367d4d8c769c16ad5200ad86d4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4c82f23d91a75961f4d08134fc" ON "refresh" ("token") `);
        await queryRunner.query(`CREATE TABLE "subscription" ("id" SERIAL NOT NULL, "letters" character varying, "purchaseDate" TIMESTAMP, "renewalDate" TIMESTAMP, "stripeSubscriptionId" character varying, "isPremium" boolean DEFAULT false, "stripeSubscriptionStatus" character varying, "duration" character varying, "amount" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, "keywordId" integer, CONSTRAINT "PK_8c3e00ebd02103caa1174cd5d9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cc906b4bc892b048f1b654d2aa" ON "subscription" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_07369bacfc337be78a257720cf" ON "subscription" ("purchaseDate") `);
        await queryRunner.query(`CREATE INDEX "IDX_58277e15dc2bec72ba629bbb14" ON "subscription" ("renewalDate") `);
        await queryRunner.query(`CREATE INDEX "IDX_e1953f77fd5dade1bcc9c0d13a" ON "subscription" ("stripeSubscriptionStatus") `);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "keyword" character varying, "subscriptionId" character varying, "fulfilmentStatus" character varying NOT NULL DEFAULT false, "total" integer, "subTotal" integer, "discount" integer, "discountCode" character varying, "checkoutSessionId" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_caabe91507b3379c7ba73637b8" ON "order" ("userId") `);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_75e2be4ce11d447ef43be0e374f" FOREIGN KEY ("photoId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_dc18daa696860586ba4667a9d31" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "keyword" ADD CONSTRAINT "FK_a5072e1cad201e2caf5efa7e8c5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "forgot" ADD CONSTRAINT "FK_31f3c80de0525250f31e23a9b83" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "refresh" ADD CONSTRAINT "FK_b39e4ed3bfa789758e476870ec2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_cc906b4bc892b048f1b654d2aa0" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_11e53b2b8bd1cedc52c4595a130" FOREIGN KEY ("keywordId") REFERENCES "keyword"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_11e53b2b8bd1cedc52c4595a130"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_cc906b4bc892b048f1b654d2aa0"`);
        await queryRunner.query(`ALTER TABLE "refresh" DROP CONSTRAINT "FK_b39e4ed3bfa789758e476870ec2"`);
        await queryRunner.query(`ALTER TABLE "forgot" DROP CONSTRAINT "FK_31f3c80de0525250f31e23a9b83"`);
        await queryRunner.query(`ALTER TABLE "keyword" DROP CONSTRAINT "FK_a5072e1cad201e2caf5efa7e8c5"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_dc18daa696860586ba4667a9d31"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_75e2be4ce11d447ef43be0e374f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_caabe91507b3379c7ba73637b8"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e1953f77fd5dade1bcc9c0d13a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_58277e15dc2bec72ba629bbb14"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_07369bacfc337be78a257720cf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cc906b4bc892b048f1b654d2aa"`);
        await queryRunner.query(`DROP TABLE "subscription"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4c82f23d91a75961f4d08134fc"`);
        await queryRunner.query(`DROP TABLE "refresh"`);
        await queryRunner.query(`DROP TABLE "forgot"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a5072e1cad201e2caf5efa7e8c"`);
        await queryRunner.query(`DROP TABLE "keyword"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_05b9b166723117ccaa8a2fa8fb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_035190f70c9aff0ef331258d28"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_783ffd81ccc0fc1e23b9b45d9d"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "file"`);
    }

}
