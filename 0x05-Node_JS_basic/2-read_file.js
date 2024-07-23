const fs = require('fs');

/**
 * Count students and log details about them.
 * @param {string} filePath - The path to the CSV file.
 */
function countStudents(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8').trim();
    const lines = fileContent.split('\n');

    if (lines.length === 0) throw new Error('Cannot load the database');

    const [header, ...dataLines] = lines;
    const headers = header.split(',');
    const studentCounts = {};
    const studentLists = {};

    dataLines.forEach(line => {
      const fields = line.split(',');
      if (fields.length !== headers.length) return; // Skip malformed lines

      const [firstName, ...rest] = fields;
      const fieldName = rest.pop(); // Assuming last field is the category

      if (!studentCounts[fieldName]) {
        studentCounts[fieldName] = 0;
        studentLists[fieldName] = [];
      }

      studentCounts[fieldName]++;
      studentLists[fieldName].push(firstName);
    });

    console.log(`Number of students: ${dataLines.length}`);
    Object.entries(studentCounts).forEach(([field, count]) => {
      console.log(`Number of students in ${field}: ${count}. List: ${studentLists[field].join(', ')}`);
    });
  } catch {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
