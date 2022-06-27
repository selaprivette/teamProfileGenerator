//require paths
const { prompt } = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const questions = require('./lib/questions.js');
const fs = require('fs');
//start function
const init = async () => {
    let enterAnother = false;
    let employees = [];
    const managerData = await prompt(questions.managerQuestions);
    employees.push(new Manager(managerData.employeeName, managerData.employeeID, managerData.employeeEmail, managerData.employeeOfficeNumber));
    if (managerData.enterAnother) {
        do {
            const data = await prompt(questions.employeeQuestions);
            if (data.employeeType == 'engineer') {
                employees.push(new Engineer(data.employeeName, data.employeeID, data.employeeEmail, data.employeeGitHub));
            } else {
                employees.push(new Intern(data.employeeName, data.employeeID, data.employeeEmail, data.employeeSchool));
            }
            enterAnother = data.enterAnother;
        } while (enterAnother == true);
    }
 createHtml(employees);
};
init();
//overwrite html each entry
const createHtml = employees => {
    let theHTML=fs.readFileSync("./src/index.html", "utf8");
    
    theHTML=theHTML.replace("~~~manager-name~~~",employees[0].name)
    theHTML=theHTML.replace("~~~manager-id~~~",employees[0].id)
    theHTML=theHTML.replaceAll("~~~manager-email~~~",employees[0].email)
    theHTML=theHTML.replace("~~~manager-office~~~",employees[0].officeNumber)
    //make cards here
    let cards=""
    for(let i=1;i<employees.length;i++){
        const employee=employees[i]
        let card = 
        `<div class="w3-quarter">
            <h3>${employee.name} (${employee.role})</h3>
            <p>ID: ${employee.id}</p>
            <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
            <p>***</p>
        </div>`
        if(employee.role=="engineer"){card=card.replace("***","Github: <a href=https://github.com/"+employee.github+" target='_blank'>"+employee.github+"</a>")
        } else {card=card.replace("***","School: "+employee.school)};
        cards+=card
    }

    theHTML=theHTML.replace("~~~cards~~~",cards)
    //html to output
    fs.writeFile("./output/index.html", theHTML, (err) => {
        if (err) console.log(err);
    });
}