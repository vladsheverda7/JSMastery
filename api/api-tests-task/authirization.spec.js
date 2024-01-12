const axios = require('axios');
const { expect } = require('chai');

const customAgent = require('../helper/customAgent');
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('api/config/env.properties');

describe('Authorization API Request Tests', async () => {
    it('should be able to be authorized', async () => {
        const userName = 'my-user';
        const userPassword = 'my-password';

        const res = await axios
            .get(properties.get('baseUrl') + `basic-auth/${userName}/${userPassword}`, {
                auth: {
                    username: userName,
                    password: userPassword,
                },
                httpsAgent: customAgent,
            })
            .then(res => res.data);

        expect(res.authenticated).equal(true);
        expect(res.user).equal(userName);
    });

    it('should not be able to be authorized', async () => {
        const userName = 'my-user';
        const userPassword = 'my-password';
        const wrongPassword = 'wrongPAssword';

        try {
            const res = await axios
                .get(properties.get('baseUrl') + `basic-auth/${userName}/${userPassword}`, {
                    auth: {
                        username: userName,
                        password: wrongPassword,
                    },
                    httpsAgent: customAgent,
                })
                .then(res => res.data);

            expect(res.status).equal(401);
        } catch (error) {
            expect(error.response.status).equal(401);
        }
    });
});
