const express = require('express');
// TODO: Add a comment describing the functionality of this expression
// Answer: This is a function that returns an object with a property called ApolloServer.
const { ApolloServer } = require('apollo-server-express');

// TODO: Add a comment describing the functionality of this expression
// Answer: This is a function that returns an object with properties called typeDefs and resolvers.
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: Add a comment describing the functionality of this async function
// Answer: This is an async function that starts the Apollo server and applies the middleware to the Express.js app.
const startApolloServer = async (typeDefs, resolvers) => {
await server.start();
server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
})
};

// TODO: Add a comment describing this functionality
// Answer: This is a function call that starts the Apollo server.
startApolloServer(typeDefs, resolvers);
