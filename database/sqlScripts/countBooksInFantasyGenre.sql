SELECT COUNT(booksGenres.book_id) AS book_count
FROM genres
LEFT JOIN booksGenres ON genres.genre_id = booksGenres.genre_id
GROUP BY genres.genre_id, genres.genre_name
HAVING genres.genre_name = 'Fantasy';