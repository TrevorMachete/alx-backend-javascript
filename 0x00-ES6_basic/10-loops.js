export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array.keys()) {
    const value = array[idx];
    newArray[idx] = appendString + value;
  }

  return newArray;
}
