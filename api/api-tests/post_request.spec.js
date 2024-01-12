const axios = require('axios');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');
const fs = require('fs');

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('api/config/env.properties');

const customAgent = require('../helper/customAgent');
const postResData = require('../response-data/post_response_data.json');

describe('POST API Request Tests', async () => {
    it('should be able post a user', async () => {
        const randomName = faker.person.fullName();
        const randomJobTitle = faker.person.jobTitle();
        const res = await axios
            .post(
                properties.get('baseUrl') + '/users',
                {
                    name: randomName,
                    job: randomJobTitle,
                },
                {
                    httpsAgent: customAgent,
                },
            )
            .then(res => res.data);

        expect(res.name).equal(randomName);
        expect(res.job).equal(randomJobTitle);

        postResData.name = res.name;
        postResData.job = res.job;
        postResData.id = res.id;
        postResData.createdAt = res.createdAt;

        fs.writeFileSync('api/response-data/post_response_data.json', JSON.stringify(postResData));
    });
});
