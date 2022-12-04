import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class ChangeUserDeleteUsernameColumn1670176763805 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // drop column username from user table
        await queryRunner.dropColumn("users", "username");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // create column username from user table
        await queryRunner.addColumn("users", new TableColumn({
            name: "username",
            type: "varchar",
        }));
    }

}
