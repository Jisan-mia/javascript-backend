// file system asynchronous
const fs = require('fs');

fs.writeFile('myfile.txt', 'Hello, from myfile', (err) => {
    if (err) throw err;
    console.log('write file');
});
fs.appendFile('myfile.txt', ' This is updated text', (err) => {
    if (err) throw err;
    console.log('append');
});

fs.readFile('myfile.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
console.log('last line but first to console');
/* file system synchronous
const fs = require('fs');

fs.writeFileSync('myfile.txt', 'Hello, from myfile');
fs.appendFileSync('myfile.txt', ' This is updated text');

const fileData = fs.readFileSync('myfile.txt');
console.log(fileData.toString());
 */
