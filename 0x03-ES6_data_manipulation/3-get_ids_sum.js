function getStudentIdsSum(list) {
// Check if the argument is an array
  if (!Array.isArray(list)) {
    return 0;
  }

  // Use the reduce function to get the sum of all student ids
  return list.reduce((sum, student) => sum + student.id, 0);
}

// Export the function
export default getStudentIdsSum;
