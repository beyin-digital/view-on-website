import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateIndexForUserOnKeyword1683008812128 implements MigrationInterface {
    name = 'CreateIndexForUserOnKeyword1683008812128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "IDX_a5072e1cad201e2caf5efa7e8c" ON "keyword" ("userId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_a5072e1cad201e2caf5efa7e8c"`);
    }

}
