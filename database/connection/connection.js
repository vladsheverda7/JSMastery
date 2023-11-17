const mysql = require('mysql2');
const fs = require('fs');

const connectionConfig = require('../constants/connectionConfig');

const connection = mysql.createConnection({
    multipleStatements: true,
    host: connectionConfig.host,
    user: connectionConfig.user,
    password: connectionConfig.password,
    database: connectionConfig.database,
});

function executeQuery(sqlFile, callback) {
    let sqlCommand = fs.readFileSync(`database/sqlScripts/${sqlFile}`).toString();

    connection.query(sqlCommand, function (err, results) {
        if (err) {
            console.log(err);
        }
        if (callback) {
            callback(results);
        }
    });
}

module.exports = { connection, executeQuery };
