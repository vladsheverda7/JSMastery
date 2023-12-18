const axios = require('axios');
const { expect } = require('chai');

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('api/config/env.properties');

describe('GET API Request Tests', async () => {
    it('should be able get request', async () => {
        const res = await axios.get(properties.get('baseUrl') + 'get');

        expect(res.status).equal(200);
        expect(res.data.url).equal(properties.get('baseUrl') + 'get');
        expect(res.data.headers.Host).equal('www.httpbin.org');
    });
});
