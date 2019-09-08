var expect = require('chai').expect;
var request = require('request');

describe('Testing status and content of API responses', function () {
    describe('Status', function () {
        it('POST status', function (done) {
            request.post('http://localhost:8080/v1/key/fruit/value/apple', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('GET status', function (done) {
            request.get('http://localhost:8080/v1/key/fruit', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('DELETE status', function (done) {
            request.delete('http://localhost:8080/v1/key/fruit', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });


    describe('Content', function () {
        it('POST response', function (done) {
            request.post('http://localhost:8080/v1/key/fruit/value/apple', function (error, response, body) {
                expect(body).to.equal('Key/Value created successfully');
                done();
            });
        });

        it('GET response', function (done) {
            request.get('http://localhost:8080/v1/key/fruit', function (error, response, body) {
                expect(body).to.equal('apple');
                done();
            });
        });

        it('DELETE response', function (done) {
            request.delete('http://localhost:8080/v1/key/fruit', function (error, response, body) {
                expect(body).to.equal('Key deleted successfully');
                done();
            });
        });
    });
});



