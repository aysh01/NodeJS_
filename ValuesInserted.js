var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "db", //UserName
  password: "db123", //Password
  database: "mydb" //DataBase
});

con.connect(function(err) {
//   if (err) throw err;
  console.log("Connected!"); //Connection, established

  //Make SQL statement:
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  //Make an array of values:
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4']];
  //Execute the SQL statement, with the value array:
  con.query(sql, [values], function (err, result) {
    // if (err) throw err;
    console.log("Number of records inserted: "+values.length); //Values, Inserted Succesfully.
  });
});
