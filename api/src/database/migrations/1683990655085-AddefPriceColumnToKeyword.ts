import { MigrationInterface, QueryRunner } from "typeorm";

export class AddefPriceColumnToKeyword1683990655085 implements MigrationInterface {
    name = 'AddefPriceColumnToKeyword1683990655085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "keyword" ADD "price" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "twoFactorAuth" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "twoFactorAuth" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "keyword" DROP COLUMN "price"`);
    }

}
