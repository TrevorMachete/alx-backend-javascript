function getStudentsByLocation(list, city) {
// Check if the argument is an array
  if (!Array.isArray(list)) {
    return [];
  }

  // Use the filter function to get students in the specified city
  return list.filter((student) => student.location === city);
}

// Export the function
export default getStudentsByLocation;
