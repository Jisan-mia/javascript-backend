const http = require('http');
const fs = require('fs');

// req is a readable stream
// res is a writeable stream
const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/stream-data.txt`);
    myReadStream.pipe(res);
});
server.listen(3000);

console.log('listening to port 3000');
