const express = require("express");
const mysql = require("mysql2");

const PORT = 3001;
const app = express();

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Password1',
      database: 'our_company'
    },
    console.log("You connected to 'our_company' database");
);

app.listen(PORT, () => {
    console.log(`This application is running on localhost:${PORT}`);
  });