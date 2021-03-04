const inquirer = require('inquirer');

const choices = [
    {
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
}
];

// add employee
const employeeqs = [
    { 
        type: "input",
        message: "What is the employee's first name?",
        name: "first"
    },    
    { 
        type: "input",
        message: "What is the employee's last name?",
        name: "last"
    },    
    { 
        type: "input",
        message: "What is the employee's role?",
        name: "role"
    }
   //manager ID 
];

const roleqs = [
    {
        type: "input",
        message: "What is the role title?",
        name: "first"
    },
    {       
        type: "input",
        message: "What is the role salary?",
        name: "first"
    },
    {     
        type: "input",
        message: "ID for the department the role belongs to?",
        name: "first"
    }
];

const departmentqs = [
    {
        type: "input",
        message: "What is the department name?",
        name: "first"
    }
];

const menu = [
    {
        type: "list", 
        message: "What would you like to do?",
        name: "license",
        choices: [
        "Sales Lead",
        "Salesperson",
        "Lead Engineer",
        "Software Engineer",
        'Account Manager',
        'Accountant',
        "Legal Team Lead",
        ]  
    }
];

inquirer.prompt().then((data));
// funcs for specific SQL queries
// constructor function or classs

//ANSWERS
// insert into / values

//inner, left, right joins

// returned data about employees from user request