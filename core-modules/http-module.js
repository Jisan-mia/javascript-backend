const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.write('\nwhat are you doing');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about page');
        res.end();
    } else {
        res.write('Not found!');
        res.end();
    }
});

server.listen(3000);

// server.on('connection', () => {
//     console.log('new connection..');
// });

console.log('server is listening to port 3000');
