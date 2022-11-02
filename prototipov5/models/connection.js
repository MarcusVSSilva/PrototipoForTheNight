const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'mydb'
});

db.connect(err => {
    if(err) throw err;
    console.log("Conectado");
});

module.exports = db;