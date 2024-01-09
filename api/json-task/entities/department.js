class Department {
    department_id;
    name;
    linked_entities;

    constructor(department_id, name, linked_entities = []) {
        this.department_id = department_id;
        this.name = name;
        this.linked_entities = linked_entities;
    }
}

module.exports = Department;
