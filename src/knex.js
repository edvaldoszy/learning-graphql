const createKnex = require('knex');

const { NODE_ENV = 'development' } = process.env;

const knex = createKnex({
  debug: NODE_ENV === 'development',
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './database.sqlite3'
  },
});

module.exports = knex;
