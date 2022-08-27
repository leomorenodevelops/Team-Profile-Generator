// Imports Employee constructor
const Employee = require('./Employee');

// Creates Intern as child class to Employee parent class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Calls the constructor of Employee parent class
        super(name, id, email);
        this.school = school;
    }

    // Returns school from input
    getSchool() {
        return this.school;
    }

    // Overrides employee role to intern
    getRole() {
        return "Intern";
    }
}

// To be exported
module.exports = Intern;