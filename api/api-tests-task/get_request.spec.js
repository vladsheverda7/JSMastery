const axios = require('axios');
const { expect } = require('chai');

describe('GET API Request Tests', async () => {
    it('should be able get request', async () => {
        const res = await axios.get('http://www.httpbin.org/get');

        expect(res.status).equal(200);
        expect(res.data.url).equal('http://www.httpbin.org/get');
        expect(res.data.headers.Host).equal('www.httpbin.org');
    });
});
