const connection = require('../../connection/connection');

const sqlDeleteAllFromBookTable = `DELETE FROM books`;

connection.execute(sqlDeleteAllFromBookTable, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Book data has been deleted');
    }
});
