const Result = require("./models/Result");

const resolvers = {
  Query: {
    getScanResults: async (parent, args, context, info) => {
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
    addScanResult: async (parent, args, context, info) => {
      let {
        status,
        repositoryName,
        findings,
        finishedAt,
        queuedAt,
        scanningAt,
      } = args.input;
      if (
        finishedAt === undefined &&
        queuedAt === undefined &&
        scanningAt === undefined
      ) {
        obj = {
          success: false,
          message: "Please provide either of finishedAt, queuedAt, scanningA",
          savedScanResult: null,
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

      let obj = {};

      if (result) {
        obj = {
          success: true,
          message: "Successfully saved scan result",
          savedScanResult: {
            id: result._id,
            status: result.status,
            repositoryName: result.repositoryName,
            findings: result.findings,
            queuedAt: result.queuedAt,
            scanningAt: result.scanningAt,
            finishedAt: result.finishedAt,
          },
        };
      } else {
        obj = {
          success: false,
          message: "Could not save scan result",
          savedScanResult: [null],
        };
      }
      return obj;
    },

    updateScanResult: async (parent, { id, input }, context, info) => {
      const result = await Result.findById(id);
      let obj = {};
      if (!result) {
        obj = {
          success: false,
          message: "Could not find any result with the given id",
          updatedScanResult: null,
        };
        return obj;
      }

      await result.updateOne({ $set: JSON.parse(JSON.stringify(input)) });

      obj = {
        success: true,
        message: "Successfully updated scan result",
        updatedScanResult: result,
      };
      return obj;
    },

    deleteScanResult: async (parent, { id }, context, info) => {
      const result = await Result.findById(id).select("_id");
      let obj = {};
      if (!result) {
        obj = {
          success: false,
          message: "Could not find any result with the given id",
          deletedScanResultId: null,
        };
        return obj;
      }

      await result.delete();

      obj = {
        success: true,
        message: "successfully deleted result ",
        deletedScanResultId: result._id,
      };
      return obj;
    },
  },
};

module.exports = resolvers;
