const School = require('./events-extend');

const school = new School();

// register a listener for 'bellRing' event
school.on('bellRing', ({ period, text }) => {
    console.log(`Time to go home because ${period} ${text}`);
});
school.startPeriod();
