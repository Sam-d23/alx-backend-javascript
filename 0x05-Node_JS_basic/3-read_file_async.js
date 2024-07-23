const fs = require('fs');

/**
 * Count students and log details about them asynchronously.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<void>}
 */
const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {};
      const fields = {};
      const lines = data.split('\n').filter(line => line.trim() !== '');

      let length = lines.length - 1; // Exclude the header line

      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i];
        const [firstname, , , field] = line.split(',');
        
        if (!field) {
          length -= 1; // Exclude invalid lines
          continue;
        }

        if (students[field]) {
          students[field].push(firstname);
        } else {
          students[field] = [firstname];
        }

        fields[field] = (fields[field] || 0) + 1;
      }

      console.log(`Number of students: ${length}`);
      for (const [field, count] of Object.entries(fields)) {
        const list = students[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }

      resolve();
    });
  });
};

module.exports = countStudents;
