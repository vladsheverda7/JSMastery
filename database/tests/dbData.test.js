const chai = require('chai');
const expect = chai.expect;

const { connection, executeQuery } = require('../connection/connection');

describe('Tables Data', function () {
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
});
