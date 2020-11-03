var request = require('request');
const endpoint = 'http://localhost:3005/api/hello';

describe('Hello response', function () {

    it("should respond with hello world", function (done) {
        request(endpoint, function (error, response, body) {
            expect(body).toEqual('{"body":"Hello World!"}');
            done();
        });
    });
});


