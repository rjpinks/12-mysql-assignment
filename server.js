//Variables for setting up the app
const express = require("express");
const mysql = require("mysql2");

const PORT = 3001;
const app = express();

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


app.listen(PORT, () => {
    console.log(`This application is running on localhost:${PORT}`);
  });