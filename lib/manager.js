const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "manager");
        this.officeNumber = officeNumber
    }
}

module.exports = Manager;