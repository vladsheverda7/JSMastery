const { expect } = require('chai');
const fs = require('fs');

const User = require('../entities/user');
const Company = require('../entities/company');
const Department = require('../entities/department');
const Relationship = require('../entities/relationship');
const DepartmentMapping = require('../entities/department-mapping');

let serializedCompanies;
let expectedJson;

beforeAll(() => {
    const xyzUser1 = new User(1, 'John Doe', 'SDET', 2, [], 101);
    const xyzUser2 = new User(2, 'Jane Manager', 'Manager', null, [1, 3], 101);
    const xyzUser3 = new User(3, 'Alice Unemployed', 'Unemployed');
    const xyzDepartment = new Department(101, 'Engineering', [1, 2]);

    const xyzRelationships = {
        employee_manager: [new Relationship(1, 2)],
        manager_employee: [new Relationship(null, 2, [1, 3])],
    };

    const xyzDepartmentMappings = [new DepartmentMapping(101, [1, 2])];
    const xyzCompany = new Company(1, 'XYZ Corporation', [xyzUser1, xyzUser2, xyzUser3], [xyzDepartment], xyzRelationships, xyzDepartmentMappings);

    const abcUser1 = new User(4, 'Bob Developer', 'Developer', 5, [], 201);
    const abcUser2 = new User(5, 'Eva Manager', 'Manager', null, [4], 101);
    const abcDepartment = new Department(201, 'IT', [4]);

    const abcRelationships = {
        employee_manager: [new Relationship(4, 5)],
        manager_employee: [new Relationship(null, 5, [4])],
    };

    const abcDepartmentMappings = [new DepartmentMapping(201, [4])];
    const abcCorporationCompany = new Company(2, 'ABC Corporation', [abcUser1, abcUser2], [abcDepartment], abcRelationships, abcDepartmentMappings);

    const companies = [xyzCompany, abcCorporationCompany];

    serializedCompanies = JSON.parse(JSON.stringify(companies));
    expectedJson = JSON.parse(fs.readFileSync('api/json-task/structure.json', 'utf-8'));
});

describe('JSON test', () => {
    it('Test1', () => {
        fs.writeFileSync('api/json-task/tests/actual.json', JSON.stringify({ companies: serializedCompanies }));
        fs.writeFileSync('api/json-task/tests/expected.json', JSON.stringify(expectedJson));

        expect({ companies: serializedCompanies }).to.equal(expectedJson);
    });
});
