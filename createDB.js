var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin"
});

const sqlScript = require('./simpleDBCreate.sql')

con.connect(function(err) {
  console.log("Connected!");
  con.query("CREATE DATABASE users", function (err, result) {
    console.log("Database created");
    con.query(sqlScript,(err)=>{if(err)console.log(err);else console.log('database done')})
  });
});
