const connection = require('../../connection/connection');
const authorData = require('./author.json');

authorData.forEach(author => {
    const sqlInsertAuthorData = 'INSERT INTO authors (author_id, author_name) VALUES (?, ?)';
    const values = [author.author_id, author.author_name];

    connection.query(sqlInsertAuthorData, values, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Inserted row with author_id ${author.author_id}`);
        }
    });
});
