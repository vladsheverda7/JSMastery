class Relationship {
    employee_id;
    manager_id;
    employee_ids;

    constructor(employee_id, manager_id, employee_ids = []) {
        this.employee_id = employee_id;
        this.manager_id = manager_id;
        this.employee_ids = employee_ids;
    }
}

module.exports = Relationship;
