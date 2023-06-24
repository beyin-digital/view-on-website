import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1686968697095 implements MigrationInterface {
    name = 'CreateTables1686968697095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "status" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "file" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "path" character varying NOT NULL, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying, "password" character varying, "hasPassword" boolean DEFAULT false, "hasKeywords" boolean DEFAULT false, "provider" character varying NOT NULL DEFAULT 'email', "twoFactorAuthEnabled" boolean NOT NULL DEFAULT false, "socialId" character varying, "stripeCustomerId" character varying, "fullName" character varying, "country" character varying, "organisation" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "photoId" uuid, "roleId" integer, "statusId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_9bd2fe7a8e694dedc4ec2f666fe" UNIQUE ("socialId"), CONSTRAINT "UQ_0bfe583759eb0305b60117be840" UNIQUE ("stripeCustomerId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9bd2fe7a8e694dedc4ec2f666f" ON "user" ("socialId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0bfe583759eb0305b60117be84" ON "user" ("stripeCustomerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_035190f70c9aff0ef331258d28" ON "user" ("fullName") `);
        await queryRunner.query(`CREATE INDEX "IDX_5cb2b3e0419a73a360d327d497" ON "user" ("country") `);
        await queryRunner.query(`CREATE TABLE "subscription" ("id" SERIAL NOT NULL, "letters" character varying, "purchaseDate" TIMESTAMP, "renewalDate" TIMESTAMP, "renewalPrice" numeric, "stripeSubscriptionId" character varying, "invoiceId" character varying, "isPremium" boolean DEFAULT false, "stripeSubscriptionStatus" character varying DEFAULT 'active', "duration" character varying, "purchaseAmount" numeric, "renewalAmount" numeric, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, "keywordId" integer, CONSTRAINT "PK_8c3e00ebd02103caa1174cd5d9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cc906b4bc892b048f1b654d2aa" ON "subscription" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_07369bacfc337be78a257720cf" ON "subscription" ("purchaseDate") `);
        await queryRunner.query(`CREATE INDEX "IDX_58277e15dc2bec72ba629bbb14" ON "subscription" ("renewalDate") `);
        await queryRunner.query(`CREATE INDEX "IDX_e1953f77fd5dade1bcc9c0d13a" ON "subscription" ("stripeSubscriptionStatus") `);
        await queryRunner.query(`CREATE TABLE "keyword" ("id" SERIAL NOT NULL, "letters" character varying NOT NULL, "slug" character varying NOT NULL, "sublink" character varying, "state" character varying, "country" character varying, "organisation" character varying, "purchaseDate" TIMESTAMP, "renewalDate" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "UQ_7f77629ad9b2b31dea1339fbfd4" UNIQUE ("letters"), CONSTRAINT "PK_affdb8c8fa5b442900cb3aa21dc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "checkoutSessionId" character varying NOT NULL, "stripeSubscriptionId" character varying, "status" character varying NOT NULL, "amount" numeric NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "forgot" ("id" SERIAL NOT NULL, "hash" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_087959f5bb89da4ce3d763eab75" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_df507d27b0fb20cd5f7bef9b9a" ON "forgot" ("hash") `);
        await queryRunner.query(`CREATE TABLE "otp" ("id" SERIAL NOT NULL, "token" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "expiredAt" TIMESTAMP, "used" boolean NOT NULL DEFAULT false, "usedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_32556d9d7b22031d7d0e1fd6723" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "refresh" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "usedAt" TIMESTAMP, "used" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_9367d4d8c769c16ad5200ad86d4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "keyword_view_count" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "keywordId" integer, CONSTRAINT "PK_862dbb7082a5fbe726337a77562" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e051da320238892b326b434803" ON "keyword_view_count" ("keywordId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2c10a9ba2bebc9b8225175e12e" ON "keyword_view_count" ("createdAt") `);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_75e2be4ce11d447ef43be0e374f" FOREIGN KEY ("photoId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_dc18daa696860586ba4667a9d31" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_cc906b4bc892b048f1b654d2aa0" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_11e53b2b8bd1cedc52c4595a130" FOREIGN KEY ("keywordId") REFERENCES "keyword"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "keyword" ADD CONSTRAINT "FK_a5072e1cad201e2caf5efa7e8c5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "forgot" ADD CONSTRAINT "FK_31f3c80de0525250f31e23a9b83" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "otp" ADD CONSTRAINT "FK_db724db1bc3d94ad5ba38518433" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "refresh" ADD CONSTRAINT "FK_b39e4ed3bfa789758e476870ec2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "keyword_view_count" ADD CONSTRAINT "FK_e051da320238892b326b4348035" FOREIGN KEY ("keywordId") REFERENCES "keyword"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "keyword_view_count" DROP CONSTRAINT "FK_e051da320238892b326b4348035"`);
        await queryRunner.query(`ALTER TABLE "refresh" DROP CONSTRAINT "FK_b39e4ed3bfa789758e476870ec2"`);
        await queryRunner.query(`ALTER TABLE "otp" DROP CONSTRAINT "FK_db724db1bc3d94ad5ba38518433"`);
        await queryRunner.query(`ALTER TABLE "forgot" DROP CONSTRAINT "FK_31f3c80de0525250f31e23a9b83"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "keyword" DROP CONSTRAINT "FK_a5072e1cad201e2caf5efa7e8c5"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_11e53b2b8bd1cedc52c4595a130"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_cc906b4bc892b048f1b654d2aa0"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_dc18daa696860586ba4667a9d31"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_75e2be4ce11d447ef43be0e374f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2c10a9ba2bebc9b8225175e12e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e051da320238892b326b434803"`);
        await queryRunner.query(`DROP TABLE "keyword_view_count"`);
        await queryRunner.query(`DROP TABLE "refresh"`);
        await queryRunner.query(`DROP TABLE "otp"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_df507d27b0fb20cd5f7bef9b9a"`);
        await queryRunner.query(`DROP TABLE "forgot"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "keyword"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e1953f77fd5dade1bcc9c0d13a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_58277e15dc2bec72ba629bbb14"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_07369bacfc337be78a257720cf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cc906b4bc892b048f1b654d2aa"`);
        await queryRunner.query(`DROP TABLE "subscription"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5cb2b3e0419a73a360d327d497"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_035190f70c9aff0ef331258d28"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0bfe583759eb0305b60117be84"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9bd2fe7a8e694dedc4ec2f666f"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "file"`);
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
