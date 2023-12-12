const axios = require('axios');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('api/config/env.properties');

const customAgent = require('../helper/customAgent');

describe('PATCH API Request Tests', async () => {
    it('should be able update name of the user', async () => {
        const randomName = faker.person.fullName();
        const res = await axios
            .patch(
                properties.get('baseUrl') + '/users/2',
                {
                    name: randomName,
                },
                {
                    httpsAgent: customAgent,
                },
            )
            .then(res => res.data);

        expect(res.name).equal(randomName);
    });
});
