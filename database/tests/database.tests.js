const chai = require('chai');
const expect = chai.expect;

const connection = require('../connection/connection.js');

const sqlShowAllDatabases = 'SHOW DATABASES';

describe('Database Tests', function () {
    beforeEach(() => {
        connection.connect();
    });

    afterEach(() => {
        connection.end();
    });

    it('should verify database has been created', done => {
        connection.query(sqlShowAllDatabases, function (err, result) {
            if (err) {
                done(err);
                return;
            }

            const databaseNames = result.map(row => row.Database);

            expect(databaseNames).to.include('library');

            done();
        });
    });
});
