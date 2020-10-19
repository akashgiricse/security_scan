const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    demo: Demo
  }

  type Demo {
    result: String
  }
`;

module.exports = typeDefs;
