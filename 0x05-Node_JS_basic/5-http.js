const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port and hostname
const hostname = '127.0.0.1';
const port = 1245;

// Function to count students and return the information as a string
const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject('Cannot load the database');
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

      let result = `Number of students: ${length}\n`;
      for (const [field, count] of Object.entries(fields)) {
        const studentNames = students[field].join(', ');
        result += `Number of students in ${field}: ${count}. List: ${studentNames}\n`;
      }

      resolve(result.trim());
    });
  });
};

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    try {
      const dbPath = path.join(__dirname, 'database.csv');
      const studentsInfo = await countStudents(dbPath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students\n${studentsInfo}\n`);
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Cannot load the database\n');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

// Start listening on the specified port
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Export the server instance
module.exports = app;
