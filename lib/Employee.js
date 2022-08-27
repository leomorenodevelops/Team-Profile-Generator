// Employee constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    // Returns name from input
    getName() {
        return this.name;
    }

    // Returns id from input
    getId() {
        return this.id;
    }

    // Returns email from input
    getEmail() {
        return this.email;
    }

    // Returns employee type
    getRole() {
        return 'Employee';
    }
}

// To be exported
module.exports = Employee;