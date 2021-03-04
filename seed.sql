DROP DATABASE IF EXISTS _db;
CREATE DATABASE _db;
USE _db;

CREATE TABLE department (
    id INTEGER(1) NOT NULL, -- will accept a number up to howw many
    -- digits, can be up to 250
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE employee (
    id INTEGER(1) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER(1) NOT NULL,
    manager_id INTEGER(1) ,
    PRIMARY KEY (id) 
);

CREATE TABLE role (
    id INTEGER(1) NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INTEGER(1) NOT NULL,
    PRIMARY KEY (id)
);

const insertDept = () => {

}
INSERT INTO department (id, name, primary key)
VALUES (idvalue, "name value", primary key);

const insertEmployee = () => {
    
}
INSERT INTO employee (id, first_name , last_name, role_id, manager_id, primary key)
VALUES (idvalue, "first name", "last name", roleid, mnagerid, primary key);

const insertRole = () => {
}
INSERT INTO role (id, title, last_name, role_id, manager_id, primary key)
VALUES (idvalue, "title", salary, department id, primary key);

SELECT --what
FROM --where, and...
INNER JOIN
LEFT JOIN
RIGHT JOIN