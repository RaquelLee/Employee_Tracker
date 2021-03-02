DROP DATABASE IF EXISTS _db;
CREATE DATABASE _db;
USE _db;

CREATE TABLE department (
    id INTEGER(1) NOT NULL,
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
    salary NOT NULL,
    department_id INTEGER(1) NOT NULL,
    PRIMARY KEY (id)
);

