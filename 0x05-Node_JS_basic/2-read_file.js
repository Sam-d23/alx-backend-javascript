const fs = require('fs');

/**
 * Count students and log details about them.
 * @param {string} filePath - The path to the CSV file.
 */
function countStudents(filePath) {
  const studentRecords = {};
  const categoryCounts = {};
  let totalLines = 0;

  try {
    const fileData = fs.readFileSync(filePath, 'utf8').trim();
    const linesArray = fileData.split('\n').filter(Boolean);

    linesArray.forEach((line, index) => {
      if (index === 0) return; // Skip header line

      const [name, , , category] = line.split(',');

      if (!studentRecords[category]) {
        studentRecords[category] = [];
      }
      studentRecords[category].push(name);

      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      totalLines += 1;
    });

    console.log(`Number of students: ${totalLines}`);
    Object.entries(categoryCounts).forEach(([category, count]) => {
      console.log(`Number of students in ${category}: ${count}. List: ${studentRecords[category].join(', ')}`);
    });

  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
