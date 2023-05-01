import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedUsedKeyToRefreshToken1682979572789 implements MigrationInterface {
    name = 'AddedUsedKeyToRefreshToken1682979572789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "refresh" ADD "tokenUsed" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "refresh" DROP COLUMN "tokenUsed"`);
    }

}
