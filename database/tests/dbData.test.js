const chai = require('chai');
const expect = chai.expect;

const { connection, executeQuery } = require('../connection/connection');

describe('DB checks', function () {
    before(() => {
        executeQuery('seedDatabase.sql');
    });

    after(() => {
        executeQuery('dropTables.sql');
        connection.end();
    });

    it('should verify authors table has data', done => {
        executeQuery('selectAllDataFromAuthorTable.sql', results => {
            expect(results).to.be.an('array');
            done();
        });
    });

    it('should verify books table has data', done => {
        executeQuery('selectAllDataFromBookTable.sql', results => {
            expect(results).to.be.an('array');
            done();
        });
    });

    it('should verify booksDetails table has data', done => {
        executeQuery('selectAllDataFromBookDetailsTable.sql', results => {
            expect(results).to.be.an('array');
            done();
        });
    });

    it('should verify genres table has data', done => {
        executeQuery('selectAllDataFromGenreTable.sql', results => {
            expect(results).to.be.an('array');
            done();
        });
    });

    it('should verify booksGenres table has data', done => {
        executeQuery('selectAllDataFromBookGenresTable.sql', results => {
            expect(results).to.be.an('array');
            done();
        });
    });

    it('should verify books in Fantasy genre', done => {
        executeQuery('selectAllBooksInFantasyGenre.sql', results => {
            const genreNames = results.map(book => book.genre_name);

            expect(genreNames).to.include('Fantasy');
            done();
        });
    });

    it('should verify sorting by book name', done => {
        executeQuery('sortingBooksGenresByBookName.sql', results => {
            const expectedOrder = [
                { title: 'Blood of Elves', genre_name: 'Fantasy' },
                { title: 'Blood of Elves', genre_name: 'Adventure' },
                { title: 'The Last Wish', genre_name: 'Fantasy' },
                { title: 'The Lord of the Rings', genre_name: 'Adventure' },
            ];

            const sortedBooks = results.sort((a, b) => a.title.localeCompare(b.title));

            expect(sortedBooks.map(book => book.title)).to.eql(expectedOrder.map(book => book.title));
            done();
        });
    });

    it('should verify amount of books in Fantasy genre', done => {
        executeQuery('countBooksInFantasyGenre.sql', results => {
            const bookCount = results[0].book_count;

            expect(bookCount).to.eq(2);
            done();
        });
    });

    it('should delete one object from author table', done => {
        executeQuery('countRecordsInBookGenresTable.sql', resultBeforeDeleting => {
            const recordCount = resultBeforeDeleting[0].record_count;
            expect(recordCount).to.eq(4);
        });

        executeQuery('deleteDataFromBookGenresTable.sql', () => {
            executeQuery('countRecordsInBookGenresTable.sql', resultAfterDeleting => {
                const recordCount = resultAfterDeleting[0].record_count;
                expect(recordCount).to.eq(2);
                done();
            });
        });
    });

    it('should verify updating author name', done => {
        executeQuery('updateAuthorName.sql', () => {
            const expectedName = 'Vlad Sheverda';

            executeQuery('selectParticularDataFromAuthorTable.sql', result => {
                const actualName = result[0].author_name;
                expect(actualName).to.eq(expectedName);
                done();
            });
        });
    });
});
