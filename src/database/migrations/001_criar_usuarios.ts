import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('usuarios', (table) => {
        table.increments('id')
        table.string('nome').notNullable()
        table.string('email').notNullable().unique()
        table.string('senha').notNullable()
        table.date('data_nascimento').notNullable()
        table.decimal('peso', 5, 2).notNullable()
        table.decimal('altura', 4, 2).notNullable()
        table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('usuarios')
}