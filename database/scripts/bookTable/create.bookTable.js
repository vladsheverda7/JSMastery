const connection = require('../../connection/connection');

const sqlCreateBookTable = `CREATE Table books (
    book_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(50),
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(author_id))`;

connection.execute(sqlCreateBookTable, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Book table has been created');
    }
});
