const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static(path.join('public')));
app.use('/static', express.static(path.join('public'), { extensions: ['js'] }));

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'quiz3',
});

app.post("/updatePass", (req, res) => {
    if(!username || !password ){
        console.log("Username and Password are required.")
    }
});

app.use(express.static(path.join('public')));

  app.listen(port, () => {
    console.log('Server running on http://localhost:${port}/index.html');
  });