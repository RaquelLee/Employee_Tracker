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

const updateEmpRole = () => {
    inquirer.prompt(empRoleQs).then((answer) => {
        const query = connection.query(
            'UPDATE employees SET ? WHERE ?',
            [{ role_id: answer.roleId },
            { id: answer.empId}],
            (err, res) => {
                if (err) throw err;
                console.log(`${res.affectedRows} employee updated!\n`);
                init();
            }
        );
        console.log(query.sql);
        init();
    });
};

const next = (choice) => {
    switch (choice){
        case "View All Employees":
        readEmps();
        break;
        case "View All Roles":
        readRoles();
        break;
        case "View All Departments":
        readDepts();
        break;
        case "Add Employee":
        createEmp();
        break;
        case 'Add Role':
        createRole();
        break;
        case 'Add Department':
        createDepartment();
        break;
        case "Update Employee Role":
        updateEmpRole();
        break;
        case "Exit":
        connection.end();
        break;
    }
}

const init = () => {
    inquirer.prompt(choices).then((data) => {
        next(data.action);
    });

};

const choices = [
    {
        type: "list", 
        message: "For Employees, Roes, or Departments:",
        name: "action",
        choices: [
            "View All Employees",
            "View All Roles",
            "View All Departments",
            'Add Employee',
            'Add Role',
            'Add Department',
            "Update Employee Role",
            "Exit"
        ]
    }
];
const empRoleQs = [
    { 
        type: "input",
        message: "What is the employee's ID?",
        name: "empId"
    },    
    { 
        type: "input",
        message: "What is the ID of the Employee's new role?",
        name: "roleId"
    }
];  
const empQs = [
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
        message: "What is the employee's role ID?",
        name: "role"
    },
    { 
        type: "input",
        message: "What is the employee's manager's ID?",
        name: "manager"
    }
];  

const roleqs = [
    {
        type: "input",
        message: "What is the role title?",
        name: "roleTitle"
    },
    {       
        type: "input",
        message: "What is the role salary?",
        name: "roleSalary"
    },
    {     
        type: "input",
        message: "ID for the department the role belongs to?",
        name: "roleDeptId"
    }
];

const deptqs = [
    {
        type: "input",
        message: "What is the department name?",
        name: "deptName"
    }
];

const createDepartment = () => {
    inquirer.prompt(deptqs).then((answer) => {
        const query = connection.query(
            'INSERT INTO departments SET ?',
            {
                dept_name: answer.deptName
            },
            (err, res) => {
                if (err) throw err;
                console.log(`${res.affectedRows} Department inserted!\n`);
            }
        );
        console.log(query.sql);
        init();
    });
};

const createEmp = () => {
    inquirer.prompt(empQs).then((answer) => {
        const query = connection.query(
            'INSERT INTO employees SET ?',
            {
                first_name: answer.first,
                last_name: answer.last,
                role_id: answer.role,
                manager_id: answer.manager
            },
            (err, res) => {
                if (err) throw err;
                console.log(`${res.affectedRows} employee inserted!\n`);
            }
        );
        console.log(query.sql);
        init();
    });
};

const createRole = () => {
    inquirer.prompt(roleqs).then((answer) => {
        const query = connection.query(
            'INSERT INTO roles SET ?',
            {
                title: answer.roleTitle,
                salary: answer.roleSalary,
                department_id: answer.roleDeptId
            },
            (err, res) => {
                if (err) throw err;
                console.log(`${res.affectedRows} role inserted!\n`);
            }
        );
        console.log(query.sql);
        init();
    });
};

const readDepts = () => {
    connection.query('SELECT * FROM departments', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });

};const readRoles = () => {
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });

};

const readEmps = () => {
    connection.query('SELECT t1.id, t1.first_name, t1.last_name, t2.title, t2.salary, t3.first_name, t3.last_name FROM employees t1 LEFT JOIN roles t2 ON t1.role_id = t2.id left join employees t3 on t1.manager_id = t3.id', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });
};