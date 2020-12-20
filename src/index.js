let logger = require("./logger"),
    util = require("./util"),
    express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

module.exports = app.listen(process.env.PORT || 3000, () => logger.info("Simple REST API is Listening..."));
app.use(bodyParser.json());

app.post("/info", async (request, response) => {

    if (request.body && Object.keys(request.body).length) {

        //filtering the data with the start & end date first
        let dateFilter = {
            $gte: new Date(request.body.startDate),
            $lt: new Date(request.body.endDate)
        };

        //fetching data from Mongo DB with above filter
        let dataList = await util.fetchData({"createdAt": dateFilter});

        //filter data by counts
        dataList = dataList.filter(e => e.totalCount = util.countFilter(e.counts, request.body.minCount, request.body.maxCount));

        //deleting the unnecessary fields
        dataList = dataList.filter(e => delete e.value && delete e._id && delete e.counts);

        //map to final response & return
        response.send(util.mapToResponse(0, "Success", dataList));

    } else {
        response.status(400).send(util.mapToResponse(1, "Empty payload!"));
    }
});
