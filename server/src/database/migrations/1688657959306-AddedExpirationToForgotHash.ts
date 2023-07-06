import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedExpirationToForgotHash1688657959306 implements MigrationInterface {
    name = 'AddedExpirationToForgotHash1688657959306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forgot" ADD "expiredAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "forgot" ADD "used" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "forgot" ADD "usedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "forgot" DROP COLUMN "usedAt"`);
        await queryRunner.query(`ALTER TABLE "forgot" DROP COLUMN "used"`);
        await queryRunner.query(`ALTER TABLE "forgot" DROP COLUMN "expiredAt"`);
    }

}
