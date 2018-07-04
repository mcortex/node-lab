var mysql = require("mysql")
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: 'mysql123',
  database: 'invoice_mgmt'
});

connection.connect();

connection.query('select * from invoices', function(err, rows, fields) {
  if(err) throw err;
  console.log('Las facturas disponibles son: \n', rows);
});

connection.query({
  sql: 'SELECT * FROM `invoices` WHERE `invoice_id` = ?',
  timeout: 40000, // 40s
  values: ['1']
}, function (err, rows, fields) {
  if(err) throw err;
  console.log('Las facturas disponibles son: \n', rows);
});

connection.query({
  sql: 'SELECT * FROM `invoices` WHERE `invoice_id` = ?',
  timeout: 40000, // 40s
  values: ['1']
}, function (err, rows, fields) {
  if(err) throw err;
  console.log('La factura con id 1 es: ', rows[0].documentno);
});

connection.end();
