// dependencies
const mathLibrary = require('./lib/math');
const quoteLibrary = require('./lib/quote');

const app = {
    timeBetweenQuotes: 2000,
};

app.generateQuote = function () {
    const quotes = quoteLibrary.getAllQuotes();
    const randomIndex = mathLibrary.getRandomNumber(0, quotes.length);

    const randomQuote = quotes[randomIndex];
    console.log(randomQuote);
};

app.infinityLoop = function () {
    setInterval(this.generateQuote, this.timeBetweenQuotes);
};

app.infinityLoop();
