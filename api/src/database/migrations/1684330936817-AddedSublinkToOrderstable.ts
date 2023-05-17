import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedSublinkToOrderstable1684330936817 implements MigrationInterface {
    name = 'AddedSublinkToOrderstable1684330936817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ADD "sublink" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "sublink"`);
    }

}
