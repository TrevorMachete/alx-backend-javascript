# 0x04. Typescript

This project is about learning and implementing TypeScript in various scenarios.

## 0. Creating an interface for a student

In the `task_0` directory, you'll find the following configuration files: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`.

The code is written in the `main.ts` file:

- An interface named `Student` is created that accepts the following elements: `firstName`(string), `lastName`(string), `age`(number), and `location`(string).
- Two students are created, and an array named `studentsList` containing the two variables is created.
- Using Vanilla Javascript, a table is rendered and for each element in the array, a new row is appended to the table.
- Each row contains the first name of the student and the location.

Requirements:

- When running, Webpack should return `No type errors found`.
- Every variable should use TypeScript when possible.

## 1. Let's build a Teacher interface

In the `task_1` directory, you'll find the following configuration files: `package.json`, `tsconfig.json`, `webpack.config.js`.

- `firstName`(string) and `lastName`(string). These two attributes should only be modifiable when a Teacher is first initialized.
- `fullTimeEmployee`(boolean) this attribute should always be defined.
- `yearsOfExperience`(number) this attribute is optional.
- `location`(string) this attribute should always be defined.
- Add the possibility to add any attribute to the Object like `contract`(boolean) without specifying the name of the attribute.

## 2. Extending the Teacher class

An interface named `Directors` is created that extends `Teacher`. It requires an attribute named `numberOfReports`(number).

## 3. Printing teachers

A function `printTeacher` is created:

- It accepts two arguments `firstName` and `lastName`.
- It returns the first letter of the `firstName` and the full `lastName`.
- Example: `printTeacher("John", "Doe") -> J. Doe`
- An interface for the function named `printTeacherFunction` is created.

## 4. Writing a class

A Class named `StudentClass` is created:

- The constructor accepts `firstName`(string) and `lastName`(string) arguments.
- The class has a method named `workOnHomework` that return the string `Currently working`.
- The class has a method named `displayName`. It returns the `firstName` of the student.
- The constructor of the class should be described through an Interface.
- The class should be described through an Interface.

Requirements:

- You can reuse the Webpack configuration from the previous exercise to compile the code.
- When running `npm run build`, no TypeScript error should be displayed.
- Every variable should use TypeScript when possible.

## 5. Advanced types Part 1

The `DirectorInterface` interface is created with the 3 expected methods:

- `workFromHome()` returning a string
- `getCoffeeBreak()` returning a string
- `workDirectorTasks()` returning a string

The `TeacherInterface` interface is created with the 3 expected methods:

- `workFromHome()` returning a string
- `getCoffeeBreak()` returning a string
- `workTeacherTasks()` returning a string

A class `Director` is created that will implement `DirectorInterface`:

- `workFromHome` should return the string `Working from home`
- `getToWork` should return the string `Getting a coffee break`
- `workDirectorTasks` should return the string `Getting to director tasks`

A class `Teacher` is created that will implement `TeacherInterface`:

- `workFromHome` should return the string `Cannot work from home`
- `getCoffeeBreak` should return the string `Cannot have a break`
- `workTeacherTasks` should return the string `Getting to work`

A function `createEmployee` is created with the following requirements:

- It can return either a `Director` or a `Teacher` instance.
- It accepts 1 argument: `salary`(either number or string).
- If `salary` is a number and less than 500 - It should return a new `Teacher`. Otherwise it should return a `Director`.

## 6. Creating functions specific to employees

A function `isDirector` is created:

- It accepts `employee` as an argument.
- It will be used as a type predicate and if the employee is a director.

A function `executeWork` is created:

- It accepts `employee` as an argument.
- If the `employee` is a `Director`, it will call `workDirectorTasks`.
- If the `employee` is a `Teacher`, it will call `workTeacherTasks`.

## 7. String literal types

A String literal type named `Subjects` is created allowing a variable to have the value `Math` or `History` only. A function named `teachClass` is created:

- It takes `todayClass` as an argument.
- It will return the string `Teaching Math` if `todayClass` is `Math`.
- It will return the string `Teaching History` if `todayClass` is `History`.

## 8. Ambient Namespaces

A directory called `task_3` is created and these configuration files are copied into it: `package.json`, `webpack.config.js`, `tsconfig.json`.

The first part of will require that you build an interface and a type. Inside a file named `interface.ts`:

- Create a type `RowID` and set it equal to number.
- Create an interface `RowElement` that contains these 3 fields:
  - `firstName`: string
  - `lastName`: string
  - `age?`: number

You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can’t write a connector to the database, and you decided to download a library called `crud.js`. Copy this file into the `task_3/js` directory.

## 9. Namespace & Declaration merging

A new directory `task_4` is created and the above `tsconfig.json` and this `package.json` is put in there.

## 10. Update task_4/js/main.ts

- Create and export a constant `cpp` for `Cpp` Subjects.
- Create and export a constant `java` for `Java` Subjects.
- Create and export a constant `react` for `React` Subjects.
- Create and export one `Teacher` object `cTeacher` with `experienceTeachingC = 10`.
- For `Cpp` subject, log to the console `C++`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher` and print the strings they return.
- For `Java` subject, log to the console `Java`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return.
- For `React` subject, log to the console `React`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return.

## 11. Brand convention & Nominal typing

A directory `task_5` is created and these configuration files are copied into the root of `task_5`: `package.json`, `tsconfig.json`, `webpack.config.js`.

Create two interfaces `MajorCredits` and `MinorCredits` in `task_5/js/main.ts`:

- Each interface defines a number named `credits`.
- Add a `brand` property to each interface in order to uniquely identify each of them.

Create two functions named `sumMajorCredits` and `sumMinorCredits` in `task_5/js/main.ts`:

- Each function takes two arguments `subject1` and `subject2`.
- `sumMajorCredits` returns `MajorCredits` value and `sumMinorCredits` returns `MinorCredits` value.
- Each function sums the credits of the two subjects.
