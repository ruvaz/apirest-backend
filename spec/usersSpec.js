const request = require('request');
const endpoint = 'http://localhost:3005/api/users';

describe('Users Tests', function () {
    it("Users should respond ", function (done) {
        request(endpoint, function (error, response, body) {
            done();
        });
    });

    it('should return 200 response code', function (done) {
        request.get(endpoint, function (error, response) {
            expect(response.statusCode).toEqual(200);
            expect('Content-Type', 'json');
            done();
        });
    });

    it('should fail on POST without params', function (done) {
        request.post(endpoint, {json: true, body: {}}, function (error, response) {
            expect(response.statusCode).toEqual(500);
            done();
        });
    });

    it("User Post should respond", function (done) {
        var body = new Object();
        body.name = 'UserTest'
        body.email = 'userTest@gmail';
        body.password = 'pass123';


        request.post(endpoint, body, function (error, response, body) {
            expect(response).not.toBeNull();
            console.log(response);
            done();
        });
    });


});
