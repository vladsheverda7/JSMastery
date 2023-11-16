const connection = require('../../connection/connection');

const sqlCreateBookDetailsTable = `CREATE Table booksDetails  (
    book_id INT NOT NULL PRIMARY KEY,
    publication_date DATE,
    page_count INT NOT Null,
    FOREIGN KEY (book_id) REFERENCES books(book_id))`;

connection.execute(sqlCreateBookDetailsTable, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Book details table has been created');
    }
});
