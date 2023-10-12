const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/stream-data.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/stream-output.txt`);

// ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk);
// });

// pipe
ourReadStream.pipe(ourWriteStream);
