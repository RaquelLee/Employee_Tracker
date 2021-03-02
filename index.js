
const inquirer = require('inquirer');

const choices = [{
    type: "list", 
    message: "What would you like to do?",
    name: "license",
    choices: [
        "View All Employees",
        "View All Roles",
        "View All Departments",
        "Add Employee",
        'Add Role',
        'Add Department',
        "Update Employee Role",
    ]
}];

inquirer.prompt().then((data));
// funcs for specific SQL queries
// constructor function or classs

//ANSWERS
// insert into / values

//inner, left, right joins