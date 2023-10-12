const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`
      <html>
      <head><title> Home page</title> </head>
      <body>
        <form method="post" action="/process" >
          <input name='message' />
        </form>
      </body>
      </html>
    `);
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const bodyData = [];
        req.on('data', (chunk) => {
            bodyData.push(chunk);
        });
        req.on('end', () => {
            console.log('stream finished');
            const parsedBody = Buffer.concat(bodyData);
            console.log(parsedBody);
            res.write('processed, thanks for submitting');
            res.end();
        });
    } else {
        res.write('not found');
        res.end();
    }
});

server.listen(3000);
console.log('server is listening to port: 3000 ');
