const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks:[Book]
  }

  type Auth {
    token: ID!
    user: User
  }


  type Book {
    bookId: String!
    title: String!
    authors: [String]!
    description: String!
    image: String!
    link: String!
  
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input BookInput{
    bookId: String!
    title: String!
    authors: [String]!
    description: String!
    image: String!
    link: String!
  }

  type Query {
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    deleteBook(bookId:String!): User

  }
`;

export default typeDefs;
