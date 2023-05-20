import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedPremiumColumnToKeywordstable1684332509575 implements MigrationInterface {
    name = 'AddedPremiumColumnToKeywordstable1684332509575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "keyword" ADD "isPremium" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`CREATE INDEX "IDX_5780a2190121beb57aff94e8ae" ON "keyword" ("isPremium") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_5780a2190121beb57aff94e8ae"`);
        await queryRunner.query(`ALTER TABLE "keyword" DROP COLUMN "isPremium"`);
    }

}
