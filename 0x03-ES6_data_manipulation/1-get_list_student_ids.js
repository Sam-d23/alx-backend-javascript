export default function getListStudentsIds() {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map(student => student.id);
}
