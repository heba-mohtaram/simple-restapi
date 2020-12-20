let logger = require("./logger"),
    config = require("./config"),
    express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

app.listen(8080, () => logger.info("Simple REST API is Listening..."));

let db = "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true";

app.post("/info", (request, response) => {

});


