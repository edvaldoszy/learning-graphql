const knex = require('./knex');

module.exports = {
  Query: {
    async user(_, { id }) {
      return await knex('users')
        .where('users.id', id)
        .first();
    },
    async users(_, { offset, limit }) {
      return await knex('users')
        .offset(offset)
        .limit(limit);
    },
  },

  Mutation: {
    async createUser(_, { input }) {
      const result = await knex('users')
        .insert({
          name: input.name,
          email: input.email,
          password: input.password,
        });

      const [id] = result;
      return knex('users')
        .where('users.id', id)
        .first();
    },
  },
};
