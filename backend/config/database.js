const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000; // Change this to your preferred port number

// MySQL Database Configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tonyqiu12345',
  database: 'your_database_name'
});

// Connect to MySQL Database
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;