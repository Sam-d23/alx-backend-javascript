class HolbertonClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }
}

class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get fullStudentDescription() {
    const { year, location } = this.holbertonClass;
    return `${this.fullName} - ${year} - ${location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const listOfStudents = [
  new StudentHolberton('Guillaume', 'Salva', class2020),
  new StudentHolberton('John', 'Doe', class2020),
  new StudentHolberton('Albert', 'Clinton', class2019),
  new StudentHolberton('Donald', 'Bush', class2019),
  new StudentHolberton('Jason', 'Sandler', class2019)
];

export default listOfStudents;
