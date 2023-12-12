const axios = require('axios');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('api/config/env.properties');

const customAgent = require('../helper/customAgent');

describe('PUT API Request Tests', async () => {
    it('should be able update a user', async () => {
        const randomName = faker.person.fullName();
        const randomJobTitle = faker.person.jobTitle();
        const res = await axios
            .put(
                properties.get('baseUrl') + '/users/2',
                {
                    name: randomName,
                    job: randomJobTitle,
                },
                {
                    httpsAgent: customAgent,
                },
            )
            .then(res => res.data);
        console.log(res);
        expect(res.name).equal(randomName);
        expect(res.job).equal(randomJobTitle);
    });
});
