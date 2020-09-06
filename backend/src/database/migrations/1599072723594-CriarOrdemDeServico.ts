import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CriarOrdemDeServico1599072723594 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'ordensDeServico',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'data',
                        type: 'date'
                    },
                    {
                        name: 'base_id',
                        type: 'uuid'
                    },
                    {
                        name: 'estado',
                        type: 'varchar'
                    },
                    {
                        name: 'consumo',
                        type: 'integer'
                    }
                ]
            })
        );
        await queryRunner.createForeignKey('ordensDeServico', new TableForeignKey({
            name: 'OrdemDeServicoTemPolo',
            columnNames: ['base_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'polos',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('ordensDeServico');
    }

}
