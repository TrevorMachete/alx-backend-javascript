# 0x06. Unittests in JS

This project is about writing unit tests in JavaScript using Mocha and Node assertion library.

## Tasks

### 0. Basic test with Mocha and Node assertion library

- Install Mocha using npm.
- Set up a script in your package.json to quickly run Mocha using `npm test`.
- You have to use `assert`.
- Create a new file named `0-calcul.js`:
  - Create a function named `calculateNumber`. It should accept two arguments (number) `a` and `b`.
  - The function should round `a` and `b` and return the sum of it.
- Create a file `0-calcul.test.js` that contains test cases of this function.
  - You can assume `a` and `b` are always numbers.
  - Tests should be around the "rounded" part.

### 1. Combining descriptions

- Create a new file named `1-calcul.js`:
  - Upgrade the function you created in the previous task (`0-calcul.js`).
  - Add a new argument named `type` at the first argument of the function. `type` can be `SUM`, `SUBTRACT`, or `DIVIDE` (string).
  - When `type` is `SUM`, round the two numbers, and add `a` and `b`.
  - When `type` is `SUBTRACT`, round the two numbers, and subtract `b` from `a`.
  - When `type` is `DIVIDE`, round the two numbers, and divide `a` with `b` - if the rounded value of `b` is equal to 0, return the string `Error`.

### 2. Basic test using Chai assertion library

While using Node assert library is completely valid, a lot of developers prefer to have a behavior-driven development style. This type being easier to read and therefore to maintain.

### 3. Spies

Spies are a useful wrapper that will execute the wrapped function, and log useful information (e.g., was it called, with what arguments). Sinon is a library allowing you to create spies.

### 4. Stubs

Stubs are similar to spies. Except that you can provide a different implementation of the function you are wrapping. Sinon can be used as well for stubs.

### 5. Hooks

Hooks are useful functions that can be called before executing one or all tests in a suite.

### 6. Async tests with done

Look into how to support async testing, for example when waiting for the answer of an API or from a Promise.

### 7. Skip

When you have a long list of tests, and you can’t figure out why a test is breaking, avoid commenting out a test, or removing it. Skip it instead, and file a ticket to come back to it as soon as possible.

### 8. Basic Integration testing

In a folder `8-api` located at the root of the project directory, copy this `package.json` over.

### 9. Regex integration testing

In a folder `9-api`, reusing the previous project in `8-api` (`package.json`, `api.js` and `api.test.js`).

### 10. Deep equality & Post integration testing

In a folder `10-api`, reusing the previous project in `9-api` (`package.json`, `api.js` and `api.test.js`).
