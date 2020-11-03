const server = require('../index');

var base_url = "http://localhost:3005/"

var serverInstance;

beforeEach(function (done) {
    serverInstance = server.run.start.dev(done);
});

afterEach(function (done) {
    serverInstance.close(done);
});

describe("Server online", function() {
    describe("GET /", function() {
        it("returns status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

    });
});
