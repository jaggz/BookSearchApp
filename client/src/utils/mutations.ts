import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($input:UserInput!) {
    addUser(input: $input) {
        token
        user {
            _id
            username
            email
            password
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
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
            email
            password
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation SaveBook($input:BookInput!) {
    saveBook(input: $input) {
        _id
        username
        email
        password
        savedBooks {
            bookId
            title
            authors
            description
            image
            link
        }
    }
  }
`;

export const DELETE_BOOK = gql`
mutation DeleteBook($bookId: String!) {
  deleteBook(bookId: $bookId) {
    _id
    username
    email
    password
    savedBooks {
        bookId
        title
        authors
        description
        image
        link
    }
  }
}
`;