const http = require('http');
const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

const hostname = '127.0.0.1';
const port = 1245;

const countStudents = async (fileName) => {
  try {
    const data = await readFileAsync(fileName, 'utf-8');
    const lines = data.trim().split('\n');
    const students = {};
    const fields = {};
    let length = 0;

    lines.forEach(line => {
      if (line) {
        length++;
        const [firstname, , , field] = line.split(',');
        if (field) {
          students[field] = students[field] ? [...students[field], firstname] : [firstname];
          fields[field] = (fields[field] || 0) + 1;
        }
      }
    });

    length--; // Exclude header line
    let output = `Number of students: ${length}\n`;
    for (const [field, count] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${count}. List: ${students[field].join(', ')}\n`;
    }
    return output.trim();
  } catch {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    try {
      const dataPath = process.argv[2];
      const studentsInfo = await countStudents(dataPath);
      res.end(`This is the list of our students\n${studentsInfo}\n`);
    } catch {
      res.statusCode = 500;
      res.end('Cannot load the database\n');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
