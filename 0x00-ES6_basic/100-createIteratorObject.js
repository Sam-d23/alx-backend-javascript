export default function* createIteratorObject(report) {
  for (const employeesList of Object.values(report.allEmployees)) {
    yield* employeesList;
  }
}
