const connection = require('../../connection/connection');

const sqlDropBookTable = `DROP TABLE books`;

connection.execute(sqlDropBookTable, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Book table has been dropped');
    }
});
