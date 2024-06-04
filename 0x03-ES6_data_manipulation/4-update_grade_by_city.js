export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
  return students.filter(student => student.location === city)
                .map(student => {
                  const matchedGrade = newGrades.find(grade => grade.studentId === student.id);
                  return { ...student, grade: matchedGrade ? matchedGrade.grade : 'N/A' };
                });
  }
  return [];
}
