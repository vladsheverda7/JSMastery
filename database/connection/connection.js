const mysql = require('mysql2');
const dataBaseName = require('../constants/dataBaseName');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Passw0rd',
    database: dataBaseName,
});

module.exports = connection;
