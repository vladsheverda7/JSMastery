const connection = require('../../connection/connection');

const sqlDeleteAuthorData = `DELETE FROM authors`;

connection.execute(sqlDeleteAuthorData, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Author data has been deleted');
    }
});
