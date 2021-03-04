const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: '',
});

//view, create, update
const readProducts = () => {
    console.log('Selecting all employees...\n');
    connection.query('SELECT * FROM employees', (err, res) => {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
};

const updateEmployeeRole = () => {
    console.log('Updating...\n');
    const query = connection.query(
        'UPDATE products SET ? WHERE ?',
        [
        {
        }
        ],
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} employees updated!\n`);
            deleteProduct();
        }
    );
    console.log(query.sql);
};

const createEmployee = () => {
    console.log('Inserting new emplpoyee...\n');
    const query = connection.query(
        'INSERT INTO x SET ?',
        {

        },
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} employee inserted!\n`);
        }
    );
    console.log(query.sql);
};

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    createEmployee();
});