import { gql } from "@apollo/client";

export const QUERY_ALL_USER = gql`
  query allUsers {
    users {
      _id
      username
      email
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

export const QUERY_ONE_USER = gql`
  query oneUser($userId: ID!) {
    oneUser(_id: $userId) {
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
