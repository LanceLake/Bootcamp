const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    // TODO: Add comments to each line of code below to describe the functionality below
    addUser: async (parent, args) => {
	// Calls the addUser mutation and passes in the args object
      const user = await User.create(args);
	// Creates a token using the signToken function
      const token = signToken(user);
	// Returns the token and user

      return { token, user };
	// Returns the token and user
    },
    // TODO: Add comments to each line of code below to describe the functionality below
    login: async (parent, { email, password }) => {
	// Calls the login mutation and passes in the email and password
      const user = await User.findOne({ email });
	// Finds a user by their email

      if (!user) {
	// If no user is found, throw an error
        throw new AuthenticationError('Incorrect credentials');
	// Incorrect credentials
      }

      const correctPw = await user.isCorrectPassword(password);
	// Checks to see if the password is correct. If it is, the user is logged in
      if (!correctPw) {
	// If the password is incorrect, throw an error
        throw new AuthenticationError('Incorrect credentials');
	// Incorrect credentials
      }

      const token = signToken(user);
	// Creates a token using the signToken function
      return { token, user };
	// Returns the token and user
    },
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
	// Calls the addThought mutation and passes in the thoughtText and thoughtAuthor
      const thought = await Thought.create({ thoughtText, thoughtAuthor });
	// Creates a thought using the thoughtText and thoughtAuthor

      await User.findOneAndUpdate(
	// Finds a user by their username
        { username: thoughtAuthor },
	// Updates the user's thoughts
        { $addToSet: { thoughts: thought._id } }
	// Adds the thought to the user's thoughts
      );

      return thought;
	// Returns the thought
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
	// Calls the addComment mutation and passes in the thoughtId, commentText, and commentAuthor
      return Thought.findOneAndUpdate(
	// Finds a thought by its id
        { _id: thoughtId },
	// Updates the thought's comments
        {
          $addToSet: { comments: { commentText, commentAuthor } },
	// Adds the comment to the thought's comments
        },
        {
          new: true,
		// Returns the updated thought
          runValidators: true,
		// Runs the validators
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
	// Calls the removeThought mutation and passes in the thoughtId
      return Thought.findOneAndDelete({ _id: thoughtId });
	// Finds a thought by its id and deletes it
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
	// Calls the removeComment mutation and passes in the thoughtId and commentId
      return Thought.findOneAndUpdate(
	// Finds a thought by its id
        { _id: thoughtId },
	// Updates the thought's comments
        { $pull: { comments: { _id: commentId } } },
	// Removes the comment from the thought's comments
        { new: true }
      // Returns the updated thought
	  );
    },
  },
};

module.exports = resolvers;
// Exports the resolvers
