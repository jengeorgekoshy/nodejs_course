const fs = require('fs');

const text = 'This is a sample content';

fs.writeFile('./hello.txt', text, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file written successfully');
  }
});

const content = fs.readFile('./hello.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Content of the file is : ${data}`);
  }
});
