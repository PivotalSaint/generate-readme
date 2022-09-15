const fs = require('fs');
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File Created!'
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/page-template.js', './dist/README.MD', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'ReadMe.md file created!'
      });
    });
  });
};

module.exports = { writeFile };