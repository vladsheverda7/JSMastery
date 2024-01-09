class Company {
    company_id;
    name;
    users;
    departments;
    relationships;
    department_mappings;

    constructor(company_id, name, users = [], departments = [], relationships = [], department_mappings = []) {
        this.company_id = company_id;
        this.name = name;
        this.users = users;
        this.departments = departments;
        this.relationships = relationships;
        this.department_mappings = department_mappings;
    }
}

module.exports = Company;
