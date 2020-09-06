import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CriarPolos1599064777505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'polos',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'base',
                        type: 'varchar'
                    },
                    {
                        name: 'estoque',
                        type: 'integer'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('polos');
    }

}
