const axios = require('axios');
const { expect } = require('chai');

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('api/config/env.properties');

const customAgent = require('../helper/customAgent');

describe('GET API Request Tests', async () => {
    it('should be able get request', async () => {
        const res = await axios.get(properties.get('baseUrl') + '/users?page=2', { httpsAgent: customAgent });
        console.log(res.data);
        expect(res.data.page).equal(2);
        expect(res.data.per_page).equal(6);
    });
});
