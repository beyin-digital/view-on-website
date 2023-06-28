import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedTimeZoneToKeywordEntity1687979589043 implements MigrationInterface {
    name = 'AddedTimeZoneToKeywordEntity1687979589043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "keyword" ADD "timezone" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "keyword" DROP COLUMN "timezone"`);
    }

}
