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
    type: Number,
    required: false,
  },
  queuedAt: {
    type: Number,
    required: false,
  },
  scanningAt: {
    type: Number,
    required: false,
  },
});

module.exports = Result = mongoose.model("result", ResultSchema);
