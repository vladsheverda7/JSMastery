const fs = require('fs');

module.exports = {
    serializeCompanies: function (companies) {
        return JSON.parse(JSON.stringify(companies));
    },
    readExpectedJson: function (filePath) {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    },
};
