function updateStudentGradeByCity(list, city, newGrades) {
// Check if the argument is an array
  if (!Array.isArray(list)) {
    return [];
  }

  // Filter students by city and map to include new grade
  return list.filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}

// Export the function
export default updateStudentGradeByCity;
