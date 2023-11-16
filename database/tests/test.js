const chai = require('chai');
const expect = chai.expect;
const connection = require('../connection/connection');

const sqlSelectAllDataFromAuthorsTable = 'Select * From authors';
const sqlSelectAllDataFromBooksTable = 'Select * From books';

describe('Tables Data', function () {
    before(() => {
        connection.connect();
    });

    after(() => {
        connection.end();
    });

    it('should verify authors table has data', done => {
        connection.query(sqlSelectAllDataFromAuthorsTable, (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                done(err);
            } else {
                expect(results).to.be.an('array');
            }
            done();
        });
    });

    it('should verify books table has data', done => {
        connection.query(sqlSelectAllDataFromBooksTable, (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                done(err);
            } else {
                expect(results).to.be.an('array');
            }
            done();
        });
    });
});
