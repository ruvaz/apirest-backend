const request = require('request');

const endpoint = 'http://localhost:3005/api/news';

describe('News Tests', function () {
    it("Users should respond ", function (done) {
        request(endpoint, function (error, response, body) {
            done();
        });
    });

    it('should return 200 response code', function (done) {
        request.get(endpoint, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    it('should fail in POST', function (done) {
        request.post(endpoint, {json: true, body: {}}, function (error, response) {
            expect(response.statusCode).toEqual(404);
            done();
        });
    });




});
