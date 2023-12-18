const axios = require('axios');
const { expect } = require('chai');

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('api/config/env.properties');

describe('GET Stream tests', async () => {
    it('should be able get correct number of streams', async () => {
        const expectedStreamCount = 2;

        const res = await axios.get(properties.get('baseUrl') + `stream/${expectedStreamCount}`);
        const count = res.data.match(/id/g).length;

        expect(res.status).equal(200);
        expect(count).equal(expectedStreamCount);
    });
});
