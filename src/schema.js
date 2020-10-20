const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    """
    Get scan results
    """
    getScanResults(
      """
      List of unique ids. If empty, return total response
      """
      ids: [String]
    ): [ScanResult]
  }

  type Mutation {
    """
    Add scan results
    """
    addScanResult(
      """
      Input for scan result
      """
      input: ScanResultInput!
    ): AddScanResultResponse!

    """
    Update scan result
    """
    updateScanResult(
      """
      Unique Id
      """
      id: String!
      """
      Update input fields
      """
      input: UpdateScanResultInput!
    ): UpdateScanResultResponse!

    """
    Delete scan result entity
    """
    deleteScanResult(
      """
      Unique Id
      """
      id: String!
    ): DeleteScanResultResponse!
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
