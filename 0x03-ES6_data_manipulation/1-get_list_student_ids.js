export default function getListStudentIds(students) {
  // Check if the input is an array
  if (students instanceof Array) {
    // Use map to extract and return the ids from the student objects
    return students.map(student => student.id);
  }
  // Return an empty array if the input is not an array
  return [];
}
