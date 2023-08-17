const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;  

// MySQL Database Configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tonyqiu12345',
  database: '100_days_of_components'
});

// Connect to MySQL Database
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
