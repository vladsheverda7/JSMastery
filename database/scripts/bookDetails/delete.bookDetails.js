const connection = require('../../connection/connection');

const sqlDeleteBookDetailsTable = `DELETE FROM booksDetails`;

connection.execute(sqlDeleteBookDetailsTable, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Book data has been deleted');
    }
});
