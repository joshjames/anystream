var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "anystream",
  password: "PASSWORDREMOVED"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});