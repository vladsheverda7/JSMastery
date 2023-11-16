const connection = require('../../connection/connection');

const sqlCreateGenresTable = `CREATE TABLE genres (
    genre_id INT AUTO_INCREMENT PRIMARY KEY,
    genre_name VARCHAR(255) NOT NULL
);`;

connection.execute(sqlCreateGenresTable, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Genres table has been created`);
    }
});
