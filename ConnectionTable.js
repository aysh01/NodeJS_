var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "db", //UserName
  password: "db123", //Password
  database: "mydb" //DataBase Name
});

con.connect(function(err) {
//   if (err) throw err;
  console.log("Connected!"); //Connection Established

  /*Create a table named "customers":*/
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    // if (err) throw err;
    console.log("Table created"); //Table Created Succesfully
  });
});
