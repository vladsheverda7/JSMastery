class User {
    user_id;
    name;
    role;
    manager_id;
    employee_ids;
    department_id;

    constructor(user_id, name, role, manager_id = null, employee_ids = [], department_id = null) {
        this.user_id = user_id;
        this.name = name;
        this.role = role;
        this.manager_id = manager_id;
        this.employee_ids = employee_ids;
        this.department_id = department_id;
    }
}

module.exports = User;
