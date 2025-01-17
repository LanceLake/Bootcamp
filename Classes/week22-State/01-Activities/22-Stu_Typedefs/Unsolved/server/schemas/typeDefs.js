const { gql } = require('apollo-server-express');

// TODO: Create type definitions for `Category`, `Product`, `Order` and `User` above the `Auth` type
const typeDefs = gql`

type Auth {
	token: ID
	user: User
}

type Category {
	_id: ID
	name: String
}

type Product {
	_id: ID
	name: String
	description: String
	image: String
	quantity: Int
	price: Float
	category: Category
}


type Order {
	_id: ID
	purchaseDate: String
	products: [Product]
	user: User
}

type User {
	_id: ID
	firstName: String
	lastName: String
	email: String
	orders: [Order]
	password: String
}

type Query {
	categories: [Category]
	products(category: ID, name: String): [Product]
	product(_id: ID!): Product
	user: User
	order(_id: ID!): Order
}

type Mutation {
	addUser(
		firstName: String!
		lastName: String!
		email: String!
		password: String!
	): Auth
	addOrder(products: [ID]!): Order
	updateUser(
		firstName: String
		lastName: String
		email: String
		password: String
	): User
	updateProduct(_id: ID!, quantity: Int!): Product
	login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
