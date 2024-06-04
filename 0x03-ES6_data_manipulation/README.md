# ES6 Data Manipulation Project

This project is about manipulating data using ES6 features. It includes tasks related to basic list of objects, mapping, filtering, reducing, combining, typed arrays, set and map data structures, and weak link data structure.

## Tasks

### 0. Basic List of Objects

Create a function named `getListStudents` that returns an array of objects. Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

### 1. More Mapping

Create a function `getListStudentIds` that returns an array of ids from a list of object. This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.

### 2. Filter

Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city. It should accept a list of students (from `getListStudents`) and a city (string) as parameters.

### 3. Reduce

Create a function `getStudentIdsSum` that returns the sum of all the student ids. It should accept a list of students (from `getListStudents`) as a parameter.

### 4. Combine

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade. It should accept a list of students (from `getListStudents`), a city (String), and `newGrades` (Array of “grade” objects) as parameters.

### 5. Typed Arrays

Create a function named `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position. It should accept three arguments: length (Number), position (Number), and value (Number).

### 6. Set Data Structure

Create a function named `setFromArray` that returns a Set from an array. It accepts an argument (Array, of any kind of element).

### 7. More Set Data Structure

Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set. It accepts two arguments: a set (Set) and an array (Array).

### 8. Clean Set

Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (startString). It accepts two arguments: a set (Set) and a startString (String).

### 9. Map Data Structure

Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):

### 10. More Map Data Structure

Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1. It should accept a map as an argument.

### 11. Weak Link Data Structure

Export a const instance of WeakMap and name it `weakMap`. Export a new function named `queryAPI`. It should accept an endpoint argument.
