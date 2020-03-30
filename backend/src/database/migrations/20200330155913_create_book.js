exports.up = function (knex) {
    return knex.schema.createTable('books', (table) => {
        table.increments('id');
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.decimal('price').notNullable();
        table.integer('amount').notNullable();
    });
};

exports.down = function (knex) {
    return knex.scheema.dropTable('books');
};