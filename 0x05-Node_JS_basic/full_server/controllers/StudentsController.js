const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString()).then((students) => {
      const output = [];
      output.push('This is the list of our students');
      const keys = Object.keys(students);
      keys.sort();
      for (let j = 0; j < keys.length; j += 1) {
        output.push(`Number of students in ${keys[j]}: ${students[keys[j]].length}. List: ${students[keys[j]].join(', ')}`);
      }
      response.status(200).send(output.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(field in students)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${students[field].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
