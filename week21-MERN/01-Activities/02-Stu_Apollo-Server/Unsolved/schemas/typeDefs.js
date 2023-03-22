const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # TODO: Add a comment describing the functionality of this statement
  // Answer: This is a type that defines the structure of a class.
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  // Answer: This is a query that returns all classes from the database.
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
