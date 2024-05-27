# ES6 Basics Project

This project is all about implementing ES6 basics. Here's what the project covers:

## 0x00. ES6 Basics: Install Jest, Babel, and ESLint
Jest, Babel, and ESLint are installed in the project directory using the supplied package.json.

## 1. Const or let?
The function `taskFirst` instantiates variables using `const` and the function `taskNext` instantiates variables using `let`. The variables inside the function `taskBlock` are modified so that they aren’t overwritten inside the conditional block.

## 2. Arrow functions
The standard function is rewritten to use ES6’s arrow syntax, making it an anonymous function.

## 3. Parameter defaults
The internals of the function are condensed to 1 line without changing the name of each function/variable. Default parameter values are defined for the function parameters.

## 4. Rest parameter syntax for functions
The function is modified to return the number of arguments passed to it using the rest parameter syntax.

## 5. The wonders of spread syntax
Using spread syntax, 2 arrays and each character of a string are concatenated by modifying the function. The function body is one line long.

## 6. Take advantage of template literals
The return statement is rewritten to use a template literal so variables can be substituted.

## 7. Object property value shorthand syntax
The function’s budget object is modified to simply use the keyname instead.

## 8. No need to create empty objects before adding in properties
The `getBudgetForCurrentYear` function is rewritten to use ES6 computed property names on the budget object.

## 9. ES6 method properties
`getFullBudgetObject` is rewritten to use ES6 method properties in the fullBudget object.

## 10. For...of Loops
The function `appendToEachArrayValue` is rewritten to use ES6’s `for...of` operator.

## 11. Iterator
A function named `createEmployeesObject` is written that receives two arguments: `departmentName` (String) and `employees` (Array of Strings).

## 12. Let's create a report object
A function named `createReportObject` is written whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.

## 13. Iterating through report objects
A function named `createIteratorObject` is written, that takes into argument a report Object created with the previous function `createReportObject`. This function returns an iterator to go through every employee in every department.

## 14. Iterate through object
Finally, a function named `iterateThroughObject` is written. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.
