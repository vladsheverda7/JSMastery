const axios = require('axios');
const { expect } = require('chai');

describe('POST API Request Tests', async () => {
    it('should be able post request', async () => {
        const res = await axios.post('http://www.httpbin.org/post');

        expect(res.status).equal(200);
        expect(res.data.url).equal('http://www.httpbin.org/post');
        expect(res.data.headers.Host).equal('www.httpbin.org');
    });
});
