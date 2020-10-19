const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    scanResults(ids: [String]): [ScanResult]
  }

  type Mutation {
    addScanResult(input: ScanResultInput!): AddScanResultResponse!

    updateScanResult(
      id: String!
      input: UpdateScanResultInput!
    ): UpdateScanResultResponse!

    deleteScanResult(id: String!): DeleteScanResultResponse!
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
    message: String!
    savedScanResult: ScanResult
  }

  type UpdateScanResultResponse {
    success: Boolean!
    message: String!
    updatedScanResult: ScanResult
  }

  type DeleteScanResultResponse {
    success: Boolean!
    message: String!
    deletedScanResultId: String
  }

  input UpdateScanResultInput {
    """
    Status of the result
    """
    status: Status
    """
    Name of the repository
    """
    repositoryName: String
    """
    Findings
    """
    findings: Findings
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

  input ScanResultInput {
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
