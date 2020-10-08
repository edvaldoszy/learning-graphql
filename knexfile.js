module.exports = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './database.sqlite3'
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
};
