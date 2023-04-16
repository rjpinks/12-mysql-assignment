DROP DATABASE IF EXISTS our_company_db;

CREATE DATABASE our_company_db;
USE DATABASE our_company_db;

CREATE TABLE department (
    id INT NOT NULL, /* primary key for table->department_id */
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL, /* primary key for table->employee */
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL /* write the foriegn key here (department's ID) */
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL, /* foriegn key needed here*/
    manager_id INT /* this one can be null if they don't have a manager */
);