const https = require('https');

const customAgent = new https.Agent({
    rejectUnauthorized: false,
});

module.exports = customAgent;
