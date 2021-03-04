const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: '',
});

const afterConnection = () => {
    connection.query('SELECT FROM', (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
    });
};

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    afterConnection();
});