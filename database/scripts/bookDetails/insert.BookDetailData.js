const connection = require('../../connection/connection');
const bookDetailsData = require('../bookDetails/books.json');

bookDetailsData.forEach(book => {
    const sqlInsertBookDetailsData = 'INSERT INTO booksDetails (book_id, publication_date, page_count) VALUES (?, ?, ?)';
    const values = [book.book_id, book.publication_date, book.page_count];

    connection.query(sqlInsertBookDetailsData, values, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Inserted row with book_id ${book.book_id}`);
        }
    });
});
