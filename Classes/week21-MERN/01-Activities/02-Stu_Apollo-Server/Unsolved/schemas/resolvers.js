const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
// Answer: This is a resolver function that returns all classes from the database.
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
	  // Answer: This is a promise that returns all classes from the database.
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
