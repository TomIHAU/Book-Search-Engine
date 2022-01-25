const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
const routes = require("./routes");
const { typeDefs, resolvers } = require("./schemas");

const app = express();
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGODB_URI;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const uri = process.env.MONGODB_URI;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

server.applyMiddleware({ app });
console.log(process.env.NODE_ENV);
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
