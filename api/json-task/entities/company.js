class Company {
    constructor(company_id, name, users, departments, relationships, department_mappings) {
        this.company_id = company_id || this.company_id;
        this.name = name || this.name;
        this.users = users || this.users;
        this.departments = departments || this.departments;
        this.relationships = relationships || this.relationships;
        this.department_mappings = department_mappings || this.department_mappings;
    }
}

module.exports = Company;
