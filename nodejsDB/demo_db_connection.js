const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "099444Bc#"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});