import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateAppointments31604951981835 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'updateAt',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'createAt',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'providerID',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'date',
            type: 'timestamp with time zone'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments')
  }
}
