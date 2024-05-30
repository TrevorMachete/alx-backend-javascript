// file: 9-main.js

// eslint-disable-next-line import/no-self-import
import listOfStudents from './9-hoisting';

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
  (student) => student.fullStudentDescription,
);

console.log(listPrinted);
