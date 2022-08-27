// Imports Employee constructor
const Employee = require('./Employee');

// Creates Manager as child class to Employee parent class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Calls the constructor of Employee parent class
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Returns office number from input
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Overrides employee role to manager
    getRole() {
        return "Manager";
    }
}

// To be exported
module.exports = Manager;