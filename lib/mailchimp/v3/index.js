var http = require('http');
var request = require('request');

function MailChimpAPI_v3(apiKey) {
    this.version = '3.0';
    this.apiKey = apiKey;
    this.datacenter = apiKey.split('-');
    this.datacenter = this.datacenter[1];
    this.httpHost = this.datacenter + '.api.mailchimp.com';
    this.httpUri = 'https://' + this.httpHost + ':443';
}

module.exports = MailChimpAPI_v3;
