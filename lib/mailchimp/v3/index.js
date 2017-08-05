var http = require('http');
var request = require('request');
var helpers = require('../helpers');

function MailChimpAPI_v3(apiKey) {
    this.version = '3.0';
    this.apiKey = apiKey;
    this.datacenter = apiKey.split('-');
    this.datacenter = this.datacenter[1];
    this.httpHost = this.datacenter + '.api.mailchimp.com';
    this.httpUri = 'https://' + this.httpHost + '/3.0/';
}

module.exports = MailChimpAPI_v3;

MailChimpAPI_v3.prototype.getAccountDetails = function (done) {
    request({
        uri: this.httpUri,
        method: 'GET',
        headers: {
            "accept-encoding": "gzip,deflate",
            "Authorization": "apikey " + this.apiKey
        },
        gzip: true
    }, function (error, response, body) {
        helpers.handleMailChimpResponse(error, response, body, done);
    });
};

MailChimpAPI_v3.prototype.createList = function () {

};
MailChimpAPI_v3.prototype.getLists = function (done) {
    request({
        uri: this.httpUri + 'lists',
        method: 'GET',
        headers: {
            "accept-encoding": "gzip,deflate",
            "Authorization": "apikey " + this.apiKey
        },
        gzip: true
    }, function (error, response, body) {
        helpers.handleMailChimpResponse(error, response, body, done);
    });

};

MailChimpAPI_v3.prototype.getSpecificList = function () {

};

MailChimpAPI_v3.prototype.subscribeList = function () {

};

MailChimpAPI_v3.prototype.unsubscribeList = function () {

};

MailChimpAPI_v3.prototype.updateList = function () {

};


MailChimpAPI_v3.prototype.deleteList = function () {

};

MailChimpAPI_v3.prototype.addNewListMember = function () {

};

MailChimpAPI_v3.prototype.removeListMember = function () {

};








