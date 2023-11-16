const connection = require('../../connection/connection');
const bookData = require('../bookTable/bookData.json');

bookData.forEach(book => {
    const sqlInsertBookData = 'INSERT INTO books (title, description, author_id) VALUES (?, ?, ?)';
    const values = [book.title, book.description, book.author_id];

    connection.query(sqlInsertBookData, values, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Inserted rows into books');
        }
    });
});
