var assert = require('assert'),
    vows = require('vows'),
    chai = require('chai');
nock = require('nock');
var MailChimpAPI = require('../../index').v3('apiKey');
var assert = chai.assert;
var expect = chai.expect;
chai.should();

describe('Version 3 - API Root', function () {
    describe('Get Account Details', function () {
        it('Should return Account Details', function (done) {
            MailChimpAPI.getAccountDetails(function (err, response) {
                response.should.have.property('account_id');
                done();
            });
        });
    });
});

describe('Version 3 - API Lists', function () {
    describe('Get All Lists', function () {
        it('Should return Lists', function (done) {
            MailChimpAPI.getLists(function (err, response) {
                response.should.have.property('lists');
                done();
            });
        });
    });
});