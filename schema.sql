DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;
CREATE TABLE departments (
    id INT AUTO_INCREMENT,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id) 
);
CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
	department_id INT NOT NULL,
    PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES departments(id)
);
CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
	role_id INT NOT NULL,
	manager_id INT,
	PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES roles(id),
FOREIGN KEY (manager_id) REFERENCES employees(id)
);
USE company_db;
SELECT t1.id, t1.first_name, t1.last_name, t2.title, t2.salary, t3.first_name, t3.last_name
FROM employees t1
LEFT JOIN roles t2
ON t1.role_id = t2.id
left join employees t3 
on t1.manager_id = t3.id;