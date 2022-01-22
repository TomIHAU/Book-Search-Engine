import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook(
    $userId: ID!
    $authors: [String]!
    $description: String
    $bookId: ID!
    $image: String
    $link: String
    $title: String
  ) {
    addBook(
      userId: $userId
      authors: $authors
      bookId: $bookId
      image: $image
      link: $link
      title: $title
      description: $description
    ) {
      username
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($userId: ID!, $bookId: ID!) {
    deleteBook(userId: $userId, bookId: $bookId) {
      username
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
