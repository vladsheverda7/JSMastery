const connection = require('../../connection/connection');

const sqlDropAuthorTable = `DROP TABLE authors`;

connection.execute(sqlDropAuthorTable, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Author table has been dropped');
    }
});
