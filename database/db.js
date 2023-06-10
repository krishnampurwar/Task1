
const mysql = require('mysql');
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Deafsound.8',
    database: 'tasksdb'
});
pool.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});