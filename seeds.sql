INSERT INTO departments (dept_name)
VALUES ("Software");
INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 149305, 1);
INSERT INTO employees (first_name , last_name, role_id)
VALUES ("John", "Doe", 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 92046, 1);
INSERT INTO employees (first_name , last_name, role_id, manager_id)
VALUES ("Raquel", "Scofield", 2, 1);
INSERT INTO employees (first_name , last_name, role_id, manager_id)
VALUES ("Raq", "Sco", 2, 1);