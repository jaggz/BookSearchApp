import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
  user(username: $username) {
    
    email
    username
    _id
    savedBooks{
        authors
        title
        description
        image
        link
        bookId
    }
  }
}
`;

