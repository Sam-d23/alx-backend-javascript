const fs = require('fs').promises;

/**
 * Count students and log details about them asynchronously.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<void>}
 */
async function countStudents(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const lines = fileContent.toString().split('\n').filter(Boolean);
    
    if (lines.length === 0) throw new Error('Cannot load the database');

    const students = {};
    const fields = {};
    let totalStudents = 0;

    for (const line of lines.slice(1)) {  // Skip the header
      const field = line.split(',');
      if (field.length < 4) continue;  // Skip invalid lines

      totalStudents += 1;
      const fieldName = field[3];
      const firstName = field[0];

      if (!students[fieldName]) {
        students[fieldName] = [];
        fields[fieldName] = 0;
      }
      students[fieldName].push(firstName);
      fields[fieldName] += 1;
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const [key, value] of Object.entries(fields)) {
      console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
