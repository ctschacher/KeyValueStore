var expect = require('chai').expect;
var request = require('request');

describe('Testing status and content of API responses', function () {
    describe('Status', function () {
        it('Status 200 when POST successful', function (done) {
            request.post('http://localhost:8080/v1/key/fruit/value/apple', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('Status 200 when GET successful', function (done) {
            request.get('http://localhost:8080/v1/key/fruit', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('Status 200 when DELETE successful', function (done) {
            request.delete('http://localhost:8080/v1/key/fruit', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('Status 404 when DELETE does not find key', function (done) {
            request.delete('http://localhost:8080/v1/key/car', function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

        it('Status 404 when GET does not find key', function (done) {
            request.get('http://localhost:8080/v1/key/car', function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });


    describe('Content', function () {
        it('POST response when successful', function (done) {
            request.post('http://localhost:8080/v1/key/fruit/value/apple', function (error, response, body) {
                expect(body).to.equal('Key/Value created successfully');
                done();
            });
        });

        it('GET response when successful', function (done) {
            request.get('http://localhost:8080/v1/key/fruit', function (error, response, body) {
                expect(body).to.equal('apple');
                done();
            });
        });

        it('DELETE response when successful', function (done) {
            request.delete('http://localhost:8080/v1/key/fruit', function (error, response, body) {
                expect(body).to.equal('Key deleted successfully');
                done();
            });
        });
    });
});



