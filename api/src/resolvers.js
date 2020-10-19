const Result = require("./models/Result");

const resolvers = {
  Query: {
    scanResults: async (parent, args, context, info) => {
      if (args.ids.length === 0) {
        const results = await Result.find({});
        return results;
      } else {
        const results = await Result.find({ _id: { $in: args.ids } });
        return results;
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
      if (
        finishedAt === undefined &&
        queuedAt === undefined &&
        scanningAt === undefined
      ) {
        obj = {
          success: false,
          message: "Please provide either of finishedAt, queuedAt, scanningA",
          scanResult: [null],
        };
        return obj;
      }

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
