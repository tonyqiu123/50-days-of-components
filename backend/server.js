const express = require('express');
const { pool } = require('./db.js')

const port = process.env.PORT || 3000;

const app = express()

const promisePool = pool.promise();

promisePool.getConnection()
  .then(connection => {
    console.log('Connected to database');
    connection.release();
  })
  .catch(error => {
    console.error('Error connecting to database:', error);
  });

app.get('/', async (req, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM 100_days_of_components');
    res.json(rows);
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/ping', async (req, res) => {
  try {
    const [result] = await promisePool.query('SELECT "hello world" as RESULT');
    res.json(result[0]);
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/create', async (req, res) => {
  try {
    const [result] = await promisePool.query('INSERT INTO 100_days_of_components(name) VALUES("John")');
    res.json(result);
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
