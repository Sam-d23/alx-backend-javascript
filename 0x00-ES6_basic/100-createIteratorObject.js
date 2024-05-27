export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const employees = [];
  
  for (const department in allEmployees) {
    if (allEmployees.hasOwnProperty(department)) {
      employees.push(...allEmployees[department]);
    }
  }

  return employees[Symbol.iterator]();
}
