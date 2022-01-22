const { User } = require("../models");
const { signToken, authMiddleware } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async (parent, args) => {
      return User.find({});
    },
    oneUser: async (parent, { _id }) => {
      return User.findOne({
        _id,
      });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect details given");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect given details");
      }
      const token = signToken(user);
      return { token, user };
    },
    addBook: async (
      parent,
      { userId, authors, description, bookId, image, link, title }
    ) => {
      console.log({ userId, authors, description, bookId, image, link, title });

      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            savedBooks: { authors, description, bookId, image, link, title },
          },
        },
        {
          new: true,
        }
      );
    },
    deleteBook: async (parent, { userId, bookId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedBooks: { _id: bookId } } },
        {
          new: true,
        }
      );
    },
  },
};

module.exports = resolvers;
