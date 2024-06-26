function cleanSet(set, startString) {
  let result = '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    }
  }
  return result.slice(0, -1); // Remove trailing '-'
}

// Export the function
export default cleanSet;
