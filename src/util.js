let logger = require("./logger"),
    MongoClient = require("mongodb").MongoClient;

module.exports = {

    mapToResponse: (code, msg, data = null) => {
        let obj = {};
        obj.code = code;
        obj.msg = msg;
        data ? obj.records = data : null;
        return obj;
    },

    fetchData: async (query) => {
        const uri = "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true",
            client = new MongoClient(uri, {useUnifiedTopology: true}),
            dbName = "getir-case-study",
            collectionName = "records";

        try {
            await client.connect();
            return await client.db(dbName).collection(collectionName).find(query).toArray();
        } catch (e) {
            logger.error(e);
        } finally {
            await client.close();
        }

    },

    countFilter: (counts, minCount, maxCount) => {
        let cumulativeSum = 0;
        for (let count of counts) {
            cumulativeSum += count;
        }

        if (cumulativeSum > minCount && cumulativeSum < maxCount) {
            return cumulativeSum;
        } else {
            return false;
        }
    }
};
