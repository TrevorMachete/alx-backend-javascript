function hasValuesFromArray(set, array) {
  return array.every((item) => set.has(item));
}

// Export the function
export default hasValuesFromArray;
