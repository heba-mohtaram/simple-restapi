let chai = require("chai"),
    chaiHttp = require("chai-http"),
    server = require("../src/index");

//Assertion Style
chai.should();

chai.use(chaiHttp);


describe("POST /info", () => {
    it('it should POST & fetch data from db', () => {
        let body = {
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        };

        chai.request(server)
            .post("/info")
            .send(body)
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a("object");
                response.body.should.have.property("code").eq(0);
                response.body.should.have.property("msg").eq("Success");
            });

    });

    it('it should NOT fetch data from db without body', () => {
        let body = {};

        chai.request(server)
            .post("/info")
            .send(body)
            .end((error, response) => {
                response.should.have.status(400);
                response.body.should.be.a("object");
                response.body.should.have.property("code").eq(1);
            });

    });

});