//Variables for setting up the app
// const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const PORT = 3001;
// const app = express();

//Inquirer code
const question = "Do you want to: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role? (please no typos, and all lowercase letters)";

const promptGenerator = function() {
  inquirer.prompt([
    {
      type: "input",
      message: question,
      name: "userInput"
    }
  ])
  .then((response) => {
    if (response.userInput === "view all departments") {
      console.log("you selected view all departments");
      //code for displaying department
    } else if (response.userInput === "view all roles") {
      console.log("you selected view all roles");
      //code for displaying roles
    } else if (response.userInput === "add a department") {
      console.log("you selected add a department");
      //code for adding a dept
    } else if (response.userInput === "add an employee") {
      console.log("you selected add an employee");
      //code for adding an employee
    } else if (response.userInput === "update an employee role") {
      console.log("you selected update an employee role");
      //code for updating an employee role
    } else {
      console.log("You did not enter a correct value. Please try again.");
    }
  })
}

//Connecting to the database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Password1',
      database: 'our_company_db'
    },
    console.log("You connected to 'our_company_db' database")
);


// app.listen(PORT, () => {
//     console.log(`This application is running on localhost:${PORT}`);
// });

promptGenerator();