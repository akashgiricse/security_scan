const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    scanResults(ids: [String]): [ScanResult]
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
      queuedAt: String
      """
      Task scanning at, in epoch
      """
      scanningAt: String
      """
      Task finished at, in epoch
      """
      finishedAt: String
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
    queuedAt: String
    """
    Task scanning at, in epoch
    """
    scanningAt: String
    """
    Task finished at, in epoch
    """
    finishedAt: String
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
