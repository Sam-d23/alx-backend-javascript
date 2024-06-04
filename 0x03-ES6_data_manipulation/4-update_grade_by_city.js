export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((value) => value.location === city)
    .map((person) => {
      const grades = newGrades.filter((value) => value.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}
