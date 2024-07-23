const fs = require('fs');

function countStudents(fileName) {
  try {
    const fileContents = fs.readFileSync(fileName, 'utf8').trim();
    const lines = fileContents.split('\n').filter(Boolean);

    const students = {};
    const fields = {};

    lines.forEach((line, index) => {
      if (index === 0) return; // Skip header line
      const [firstName, , , field] = line.split(',');

      if (!students[field]) students[field] = [];
      students[field].push(firstName);

      fields[field] = (fields[field] || 0) + 1;
    });

    console.log(`Number of students: ${lines.length - 1}`);
    Object.entries(fields).forEach(([field, count]) => {
      console.log(`Number of students in ${field}:
	      ${count}. List: ${students[field].join(', ')}`);
    });

  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
