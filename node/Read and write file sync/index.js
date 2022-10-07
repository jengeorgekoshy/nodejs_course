const fs = require('fs');

const data = 'Hey this is a sample text';

fs.writeFileSync('./hello.txt', data);

const content = fs.readFileSync('./hello.txt', 'utf-8');
console.log(`Content of the file is : ${content}`);
