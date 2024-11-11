import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
  user(username: $username) {
    password
    email
    username
    _id
  }
}
`;

