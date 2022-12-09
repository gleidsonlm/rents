import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpdateUserTableAddAvatarColumn1670416494411 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //update user table to add the avatar column
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "avatar",
                type: "varchar",
                isNullable: true,
            })
        );
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        // revert change 
        await queryRunner.dropColumn("users", "avatar");
    };
};