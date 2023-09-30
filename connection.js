var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "db", //Create a UserName
  password: "db123" //Create a Password
});

con.connect(function(err) {
//   if (err) throw err;
  console.log("Connected!"); //Connection, established succesfully.
});
