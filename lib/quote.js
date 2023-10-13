const fs = require('fs');

const quote = {};

quote.getAllQuotes = function () {
    const fileContent = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8');
    const quoteArr = fileContent.split(/\r\n/);
    return quoteArr;
};

module.exports = quote;
