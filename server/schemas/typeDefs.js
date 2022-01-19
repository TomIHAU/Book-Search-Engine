const { gql } = require("apollo-server-express");
const { Query } = require("./resolvers");

// authors: String  needs to be an array

// Query {tech: [Tech]
// matchups(_id: String): [Matchup]}

// type Mutation {
//   createMatchup(tech1: String!, tech2: String!): Matchup
//   createVote(_id: String!, techNum: Int!): Matchup
// }

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
