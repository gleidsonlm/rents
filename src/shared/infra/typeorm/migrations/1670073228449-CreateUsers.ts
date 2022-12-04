import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1670073228449 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // create table Users
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid'
                },
                {
                    name: 'username',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'driver_license',
                    type: 'varchar'
                },
                {
                    name: 'admin',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
            }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // drop table Users
        await queryRunner.query("DROP TABLE IF EXISTS users");
    }

}
