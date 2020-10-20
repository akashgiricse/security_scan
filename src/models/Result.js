const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  repositoryName: {
    type: String,
    required: true,
  },
  findings: {
    type: String,
    required: true,
  },
  finishedAt: {
    type: String,
    required: false,
  },
  queuedAt: {
    type: String,
    required: false,
  },
  scanningAt: {
    type: String,
    required: false,
  },
});

module.exports = Result = mongoose.model("result", ResultSchema);
