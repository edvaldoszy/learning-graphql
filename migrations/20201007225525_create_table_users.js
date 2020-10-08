exports.up = function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
      .primary();

    table.string('name', 100)
      .notNullable();

    table.string('email', 200)
      .notNullable();

    table.string('password', 80);
  });
};

exports.down = function down(knex) {
  return knex.schema.dropTableIfExists('users');
};
