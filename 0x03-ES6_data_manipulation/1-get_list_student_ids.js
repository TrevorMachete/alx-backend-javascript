function getListStudentIds(list) {
// Check if the argument is an array
  if (!Array.isArray(list)) {
    return [];
  }

  // Use the map function to get an array of ids
  return list.map((student) => student.id);
}

// Export the function
export default getListStudentIds;
