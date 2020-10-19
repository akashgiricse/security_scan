const Result = require("./models/Result");

const resolvers = {
  Query: {
    scanResults: async (parent, args, context, info) => {
      if (args.ids.length === 0) {
        const results = await Result.find({});
        return results;
      } else {
        console.log("bye");
      }
    },
  },

  Mutation: {
    addScanResult: async (
      parent,
      { status, repositoryName, findings, finishedAt, queuedAt, scanningAt },
      context,
      info
    ) => {
      const result = new Result({
        status,
        repositoryName,
        findings,
        finishedAt,
        queuedAt,
        scanningAt,
      });

      await result.save();

      if (result) {
        obj = {
          success: true,
          message: "Successfuly saved scan result",
          scanResult: [
            {
              id: result._id,
              status: result.status,
              repositoryName: result.repositoryName,
              findings: result.findings,
              queuedAt: result.queuedAt,
              scanningAt: result.scanningAt,
              finishedAt: result.finishedAt,
            },
          ],
        };
      } else {
        obj = {
          success: false,
          message: "Could not save scan result",
          scanResult: [null],
        };
      }
      return obj;
    },
  },
};

module.exports = resolvers;
