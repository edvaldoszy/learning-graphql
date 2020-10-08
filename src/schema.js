const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  type Query {
    user(id: ID!): User
    users(offset: Int, limit: Int): [User]
  }

  input UserInput {
    id: ID
    name: String!
    email: String!
    password: String
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
