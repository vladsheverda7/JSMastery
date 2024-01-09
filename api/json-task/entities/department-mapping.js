class DepartmentMapping {
    department_id;
    linked_entities;

    constructor(department_id, linked_entities = []) {
        this.department_id = department_id;
        this.linked_entities = linked_entities;
    }
}

module.exports = DepartmentMapping;
