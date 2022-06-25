const managerQuestions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "employeeName",
    },
    {
        type: "input", 
        message: "What is the manager's ID?",
        name: "employeeID",
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "employeeEmail",
    },
    {
        type: "input", 
        message: "What is this manager's office number?",
        name: "employeeOfficeNumber",
    },
    {
        type: "confirm",
        message: "Would you like to enter another employee?",
        name: "enterAnother"
    }
]

const employeeQuestions = [
    {
        type: "list",
        message: "What type of employee are you entering?",
        choices: ["engineer", "intern"],
        name: "employeeType"
    },
    {
        type: "input",
        message: "What is this employee's name?",
        name: "employeeName",
    },
    {
        type: "input",  
        message: "What is this employee's ID?",
        name: "employeeID",
    },
    {
        type: "input",
        message: "What is this employee's email?",
        name: "employeeEmail",
    },
    {
        // conditional question, only if employeeType is "engineer"
        type: "input",
        message: "What is this engineer's Github ID?",
        name: "employeeGitHub",
        when: (answers) => answers.employeeType == "engineer",
    },
    {
        // conditional question, only if employeeType is "intern"
        type: "input",
        message: "What is this intern's school?",
        name: "employeeSchool",
        when: (answers) => answers.employeeType == "intern",
    },
    {
        type: "confirm",
        message: "Would you like to enter another employee?",
        name: "enterAnother"
    }
]

module.exports = {
    managerQuestions,
    employeeQuestions
}