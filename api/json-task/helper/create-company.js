const User = require('../entities/user');
const Company = require('../entities/company');
const Department = require('../entities/department');
const Relationship = require('../entities/relationship');
const DepartmentMapping = require('../entities/department-mapping');

const createCompanies = () => {
    const xyzCompany = new Company(
        1,
        'XYZ Corporation',
        [
            new User(1, 'John Doe', 'SDET', 2, null, 101),
            new User(2, 'Jane Manager', 'Manager', null, [1, 3], 101),
            new User(3, 'Alice Unemployed', 'Unemployed'),
        ],
        [new Department(101, 'Engineering', [1, 2])],
        {
            employee_manager: [new Relationship(1, 2)],
            manager_employee: [new Relationship(null, 2, [1, 3])],
        },
        [new DepartmentMapping(101, [1, 2])],
    );

    const abcCorporationCompany = new Company(
        2,
        'ABC Corporation',
        [new User(4, 'Bob Developer', 'Developer', 5, null, 201), new User(5, 'Eva Manager', 'Manager', null, [4], 201)],
        [new Department(201, 'IT', [4])],
        {
            employee_manager: [new Relationship(4, 5)],
            manager_employee: [new Relationship(null, 5, [4])],
        },
        [new DepartmentMapping(201, [4])],
    );

    const companies = [xyzCompany, abcCorporationCompany];

    return companies;
};

module.exports = { createCompanies };
