const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
    authors: [String]!
    description: String
    bookId: ID!
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    oneUser(_id: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addBook(
      userId: ID!
      authors: [String]!
      description: String
      bookId: ID!
      image: String
      link: String
      title: String
    ): User
    deleteBook(userId: ID!, bookId: ID!): User
  }
`;

module.exports = typeDefs;
