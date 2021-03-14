const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'company_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
console.log("Welcome to your company database manager! Select an option below to get started.");
    init();
});

const updateEmployeeRole = () => {
    const query = connection.query(
        'UPDATE employee SET ? WHERE ?',
        // set column:value where column:value
        // can be one object, or an array of updates
        [
        {
        }
        ],
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} employees updated!\n`);
            //nextfunc
        }
    );
    console.log(query.sql);
};

const next = (choice) => {
    switch (choice){
        case "View All Employees":
        console.table(answers);
        break;
        case "View All Roles":
        console.table(answers);
        break;
        case "View All Departments":
        console.table(answers);
        break;
        case "Add Employee":
        init(employeeqs);
        break;
        case 'Add Role':
        init(roleqs);
        break;
        case 'Add Department':
        init(deptqs);
        break;
        case "Update Employee Role":
        break;
        case "Update Employee Role":

            connection.end();
    }
}

const init = () => {
    inquirer.prompt(choices).then((data) => {
        next(data.actions);
    });

};

const choices = [
    {
        type: "list", 
        message: "For Employees, Roes, or Departments:",
        name: "actions",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            'Add Department',
            'Add Role',
            'Add Employee',
            "Update Employee Role",
            "Exit"
        ]
    }
];
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
    },
    { 
        type: "input",
        message: "What is the employee's manager's ID?",
        name: "role"
    }
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
        name: "deptName"
    }
];
const createEmployee = () => {
    const query = connection.query(
        'INSERT INTO employees SET ?',
        {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.roleId
        },
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} employee inserted!\n`);
        }
    );
    console.log(query.sql);

};

const createDepartment = () => {
    const query = connection.query(
        'INSERT INTO departments SET ?',
        {
            dept_name: answer.deptname
        },
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} Department inserted!\n`);
        }
    );
    console.log(query.sql);

};

const createRole = () => {
    const query = connection.query(
        'INSERT INTO roles SET ?',
        {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.deptId
        },
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} employee inserted!\n`);
        }
    );
    console.log(query.sql);
};

const readTable = () => {
    connection.query('SELECT * FROM employees', (err, res) => {
        if (err) throw err;
        console.log(res);
    });
};const readProducts = () => {
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.table(res);
    });
};const readProducts = () => {
    connection.query('SELECT * FROM departmentggs', (err, res) => {
        if (err) throw err;
        console.log(res);
    });
};
