const { readFile } = require('fs');

module.exports = function readDatabase(filePath) {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        const lines = data.toString().split('\n');
        const noHeader = lines.slice(1);
        for (let j = 0; j < noHeader.length; j += 1) {
          if (noHeader[j]) {
            const field = noHeader[j].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
          }
        }
        resolve(students);
      }
    });
  });
};
