const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    scanResults(ids: [Int]): [ScanResult]
    test: String!
  }

  type Mutation {
    addScanResult(
      """
      Status of the result
      """
      status: Status!
      """
      Name of the repository
      """
      repositoryName: String!
      """
      Findings
      """
      findings: Findings!
      """
      Task queued at, in epoch
      """
      queuedAt: Int
      """
      Task scanning at, in epoch
      """
      scanningAt: Int
      """
      Task finished at, in epoch
      """
      finishedAt: Int
    ): AddScanResultResponse!
  }

  type ScanResult {
    """
    Unique id
    """
    id: ID!
    """
    Status of the result
    """
    status: String!
    """
    Name of the repository
    """
    repositoryName: String!
    """
    Findings
    """
    findings: String!
    """
    Task queued at, in epoch
    """
    queuedAt: Int
    """
    Task scanning at, in epoch
    """
    scanningAt: Int
    """
    Task finished at, in epoch
    """
    finishedAt: Int
  }

  type AddScanResultResponse {
    success: Boolean!
    message: String
    scanResult: [ScanResult]
  }

  enum Status {
    QUEUED
    IN_PROGRESS
    SUCCESS
    FAILURE
  }

  enum Findings {
    JSONB
    JSONA
  }
`;

module.exports = typeDefs;
