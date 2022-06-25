const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, "engineer");
        this.github = github
    };
    getGitHub() {return this.github};
}
module.exports = Engineer;