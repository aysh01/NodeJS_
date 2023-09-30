var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "db", //UserName
  password: "db123" //Password
});

con.connect(function(err) {
//   if (err) throw err;
  console.log("Connected!"); //Connection, established!
  
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE mydb", function (err, result) {
    // if (err) throw err;
    console.log("Database created"); //Database created succesfully.
  });
});
