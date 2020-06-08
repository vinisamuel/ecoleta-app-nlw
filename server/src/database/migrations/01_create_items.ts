import Knex from 'knex';

const tableName = 'items';

export async function up(knex: Knex) {
    // CRIAR A TABELA
    return knex.schema.createTable(tableName, table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
};

export async function down(knex: Knex) {
    // VOLTAR ATRAS (DELETAR A TABELA)
    return knex.schema.dropTable(tableName);
};