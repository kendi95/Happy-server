import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class usersToken1612919453323 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'users-token',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'token',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'code',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'used',
            type: 'boolean',
            default: false,
            isNullable: false,
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users-token');
    }

}
