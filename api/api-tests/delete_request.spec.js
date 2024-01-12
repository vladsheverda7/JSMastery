const axios = require('axios');
const { expect } = require('chai');

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('api/config/env.properties');

const customAgent = require('../helper/customAgent');

describe('DELETE API Request Tests', async () => {
    it('should be able delete user with id 2', async () => {
        const res = await axios.delete(properties.get('baseUrl') + '/users/2', { httpsAgent: customAgent });

        expect(res.status).equal(204);
    });
});
