class Department {
    constructor(department_id, name, linked_entities) {
        this.department_id = department_id || this.department_id;
        this.name = name || this.name;
        this.linked_entities = linked_entities || this.department_id;
    }
}

module.exports = Department;
