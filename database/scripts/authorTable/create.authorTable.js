const connection = require('../../connection/connection');

const sqlCreateAuthorTable = `CREATE TABLE authors (
    author_id INT PRIMARY KEY NOT NULL,
    author_name VARCHAR(255) NOT NULL)`;

connection.execute(sqlCreateAuthorTable, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Authors table has been created');
    }
});
