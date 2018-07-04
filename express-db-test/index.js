var mysql = require("mysql")
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: 'mysql123'
});

connection.connect();

connection.query('select 1+1 as solution', function(err, rows, fields) {
  if(err) throw err;
  console.log('La solucion es: ', rows[0].solution);
});

connection.query('show databases', function(err, rows, fields) {
  if(err) throw err;
  console.log('Las bases de datos son: ', rows);
});

connection.end();
