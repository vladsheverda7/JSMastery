SELECT
    books.book_id,
    books.title,
    genres.genre_id,
    genres.genre_name
FROM
    books
    JOIN booksGenres ON books.book_id = booksGenres.book_id
    JOIN genres ON booksGenres.genre_id = genres.genre_id
WHERE
    genres.genre_name = 'Fantasy';
