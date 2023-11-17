CREATE TABLE authors (
    author_id INT PRIMARY KEY NOT NULL,
    author_name VARCHAR(255) NOT NULL
);

INSERT INTO authors (author_id, author_name) VALUES (1, 'Andrzej Sapkowski'), (2, 'John Ronald Reuel Tolkien');

CREATE Table books (
    book_id INT NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(50),
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

INSERT INTO books (book_id, title, description, author_id) VALUES 
    (
        1,
        "Blood of Elves",
        "Blood of Elves is the first novel",
        1
    ),
    (
        2,
        "The Lord of the Rings",
        "is an epic high-fantasy novel",
        2
    ),
    (
        3,
        "The Last Wish",
        "The Last Wish is the third published short story",
        1
    );    

CREATE Table booksDetails  (
    book_id INT NOT NULL PRIMARY KEY,
    publication_date DATE,
    page_count INT NOT Null,
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);

INSERT INTO booksDetails (book_id, publication_date, page_count) VALUES 
    (
        1,
        "1994-01-01",
        320
    ),
    (
        2,
        "1954-01-01",
        423
    ),
    (
        3,
        "1993-01-01",
        384
    );

CREATE TABLE genres (
    genre_id INT PRIMARY KEY,
    genre_name VARCHAR(255) NOT NULL
);

INSERT INTO genres (genre_id, genre_name) VALUES 
    (
        1,
        "Fantasy"
    ),
    (
        2,
        "Adventure"
    );

CREATE TABLE booksGenres (
    book_id INT NOT NULL,
    genre_id INT NOT NULL,
    PRIMARY KEY (book_id, genre_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (genre_id) REFERENCES genres(genre_id)
);

INSERT INTO booksGenres (book_id, genre_id) VALUES 
    (
        1,
        1
    ),
    (
        1,
        2
    ),
    (
        2,
        2
    ),
    (
        3,
        1
    );