const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // Your MySQL host
  user: 'root', // Your MySQL username
  password: '099444Bc#', // Your MySQL password
  database: 'connector' // The database you want to connect to
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// Example query
connection.query('SELECT * FROM connector', (err, results, fields) => {
  if (err) throw err;
  console.log(results);
});

connection.end();
