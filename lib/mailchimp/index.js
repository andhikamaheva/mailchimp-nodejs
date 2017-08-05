var MailChimpAPI_v3 = require('./v3'),
    fs = require('fs');

module.exports = {
    v3: function (apiKey) {
        if (!apiKey) {
            throw new Error('You must provide an API key');
        }
        return new MailChimpAPI_v3(apiKey);
    }
};
