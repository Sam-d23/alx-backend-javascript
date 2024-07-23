const fs = require('fs');


const countStudents = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const linesArray = fs
    .readFileSync(filePath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const groups = {};
  const headers = linesArray[0].split(',');
  const propertyNames = headers.slice(0, -1);

  for (const line of linesArray.slice(1)) {
    const values = line.split(',');
    const properties = values.slice(0, -1);
    const category = values[values.length - 1];
    if (!groups[category]) {
      groups[category] = [];
    }
    const entries = propertyNames
      .map((name, index) => [name, properties[index]]);
    groups[category].push(Object.fromEntries(entries));
  }

  const totalStudents = Object
    .values(groups)
    .reduce((total, group) => total + group.length, 0);
  console.log(`Number of students: ${totalStudents}`);
  for (const [category, students] of Object.entries(groups)) {
    const names = students.map(student => student.firstname).join(', ');
    console.log(`Number of students in ${category}: ${students.length}. List: ${names}`);
  }
};

module.exports = countStudents;
