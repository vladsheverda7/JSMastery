class User {
    constructor(user_id, name, role, manager_id, employee_ids, department_id) {
        this.user_id = user_id || this.user_id;
        this.name = name || this.name;
        this.role = role || this.role;
        this.manager_id = manager_id || this.manager_id;
        this.employee_ids = employee_ids || this.employee_ids;
        this.department_id = department_id || this.department_id;
    }
}

module.exports = User;
