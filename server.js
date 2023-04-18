//Variables for setting up the app
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

//Connecting to the database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: "root",
    password: "Password1",
    database: "our_company_db",
  },
  console.log("You connected to the database")
);

//Variables used in inquirer prompt questions.
const question = "Type: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role? (please no typos, and all lowercase letters)";
const newEmployeeQuestions = [
  "What is their ID/last 4 of their social?",
  "What is their first name?",
  "What is their last name?",
  "What is their role ID?",
  "What is their manager's employee number? (NULL if they do not have a manager)"
];
const updateValueQuestions = [
  "What is the new role id?",
  "What is the employee's last 4 social secuirity numbers/their employee ID"
];

//Variable storing the large function promptGenerator
const promptGenerator = function() {
  inquirer.prompt([
    {
      type: "input",
      message: question,
      name: "userInput"
    }
  ])
  //If statement that decides what was typed and which query to use (method from the mysql2 dependency)
  .then((response) => {
    //VIEWS ALL DEPARTMENTS
    if (response.userInput === "view all departments") {
      console.log("you selected view all departments");
      db.query("SELECT * FROM department", (err, results) => {
        console.table(results);
      });
    } 
    //VIEWS ALL ROLES
    else if (response.userInput === "view all roles") {
      console.log("you selected view all roles");
      db.query("SELECT * FROM role", (err, results) => {
        console.table(results);
      });
    } 
    //VIEWS ALL EMPLOYEES
    else if (response.userInput === "view all employees") {
      console.log("you selected view all employees");
      db.query("SELECT * FROM employee", (err, results) => {
        console.table(results);
      });
    } 
    //ADDS A DEPARTMENT TO THE DATABASE
    else if (response.userInput === "add a department") {
      console.log("you selected add a department");
      inquirer.prompt([
        {
          type: "input",
          message: "What department do you want to add?",
          name: "newDepartment"
        }
      ])
      .then((response) => {
        console.log(response.newDepartment);
        db.query(`INSERT INTO department (name) VALUES ("${response.newDepartment}");`)
      });
    } 
    //ADDS A ROLE TO THE DATABASE
    else if (response.userInput === "add a role") {
      console.log("you selected add a role");
      inquirer.prompt([
        {
          type: "input",
          message: "What is the title?",
          name: "title"
        },
        {
          type: "input",
          message: "What is the salary?",
          name: "salary"
        },
        {
          type: "input",
          message: "What is the department_id?",
          name: "departmentId"
        }])
        .then((response) => {
          console.log(response);
          db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${response.title}", ${response.salary}, ${response.departmentId});`)
        })
    } 
    //ADDS AN EMPLOYEE TO THE DATABASE
    else if (response.userInput === "add an employee") {
      console.log("you selected add an employee");
      inquirer.prompt([
        {
          type: "input",
          message: newEmployeeQuestions[0],
          name: "newEmpId"
        },
        {
          type: "input",
          message: newEmployeeQuestions[1],
          name: "newEmpFirst"
        },
        {
          type: "input",
          message: newEmployeeQuestions[2],
          name: "newEmpLast"
        },
        {
          type: "input",
          message: newEmployeeQuestions[3],
          name: "newEmpRole"
        },
        {
          type: "input",
          message: newEmployeeQuestions[4],
          name: "newEmpManager"
        }
      ])
      .then((response) => {
        db.query(`INSERT INTO employee (id, first_name, last_name, role_id, manager_id) 
        VALUES (${response.newEmpId}, "${response.newEmpFirst}", "${response.newEmpLast}", ${response.newEmpRole}, ${response.newEmpManager});`)
      });
    } 
    //UPDATES AN EMPLOYEE'S ROLE
    else if (response.userInput === "update an employee role") {
      console.log("you selected update an employee role");
      inquirer.prompt([
        {
          type: "input",
          message: updateValueQuestions[0],
          name: "newValue"
        },
        {
          type: "input",
          message: updateValueQuestions[1],
          name: "empId"
        }
      ])
      .then((response) => {
        db.query(`UPDATE employee
        SET role_id = ${response.newValue}
        WHERE id = ${response.empId};`)
      })
    } 
    //PRINTS THAT THEY NEED TO TRY AGAIN (BAD INPUT)
    else {
      console.log("You did not enter a correct value. Please try again.");
    }
  })
}

promptGenerator();