const express = require('express');
const { pool } = require('./db.js');

const port = process.env.PORT || 3000;

const app = express();

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
    connection.release(); 
  }
});

app.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users');
  res.json(rows);
});

app.get('/ping', async (req, res) => {
  const [result] = await pool.query('SELECT "hello world" as RESULT');
  res.json(result[0]);
});

app.post('/create', async (req, res) => {
  const result = await pool.query('INSERT INTO users(name) VALUES("John")');
  res.json(result);
  res.send('Welcome to Server');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
