const { expect } = require('chai');

const { serializeCompanies, readExpectedJson } = require('../helper/json-helper');
const { createCompanies } = require('../helper/create-company');

describe('JSON test', () => {
    const expectedJsonPath = 'api/json-task/structure.json';

    const companies = createCompanies();
    const serializedCompanies = serializeCompanies(companies);
    const expectedJson = readExpectedJson(expectedJsonPath);

    it('Test1', () => {
        expect({ companies: serializedCompanies }).to.deep.equal(expectedJson);
    });
});
