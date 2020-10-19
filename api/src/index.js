const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const connectDB = require("../config/db");

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  // Connection check with db
  await connectDB();
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

startServer();
