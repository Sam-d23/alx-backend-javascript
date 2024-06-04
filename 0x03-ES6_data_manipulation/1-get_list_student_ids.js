import getListStudents from "./0-get_list_students.js";

export default function getListStudentsIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map(student => student.id);
}
