// Imports Employee constructor
const Employee = require('./Employee');

// Creates Engineer as child class to Employee parent class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Calls the constructor of Employee parent class
        super(name, id, email);
        this.github = github;
    }

    // Returns github from input
    getGithub() {
        return this.github;
    }

    // Overrides employee role to engineer
    getRole() {
        return "Engineer";
    }
}

// To be exported
module.exports = Engineer;