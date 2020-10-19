const Result = require("./models/Result");

// const result = new Result({ name: "Zildjian" });
// result.save().then(() => console.log("meow"));
const { gql } = require("apollo-server");

const resolvers = {
  Query: {
    test: () => "Hi there",
  },
};

module.exports = resolvers;
