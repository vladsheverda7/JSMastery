const axios = require('axios');
const { expect } = require('chai');

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('api/config/env.properties');

describe('POST API Request Tests', async () => {
    it('should be able post request', async () => {
        const res = await axios.post(properties.get('baseUrl') + 'post');

        expect(res.status).equal(200);
        expect(res.data.url).equal(properties.get('baseUrl') + 'post');
        expect(res.data.headers.Host).equal('www.httpbin.org');
    });
});
