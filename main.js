const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

const filePath = path.resolve(file);

switch (operation) {
  case 'create':
    fs.writeFile(filePath, content, (err) => {
      if (err) throw err;
      console.log(`File '${file}' created successfully.`);
    });
    break;

  case 'read':
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(`Content of '${file}':\n${data}`);
    });
    break;

  case 'update':
    fs.appendFile(filePath, content, (err) => {
      if (err) throw err;
      console.log(`File '${file}' updated successfully.`);
    });
    break;

  case 'delete':
    fs.unlink(filePath, (err) => {
      if (err) throw err;
      console.log(`File '${file}' deleted successfully.`);
    });
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
}

