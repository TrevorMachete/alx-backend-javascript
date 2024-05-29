# 0x01. ES6 Promises

## Introduction
This project is about understanding and implementing ES6 Promises in JavaScript.

## Tasks

### 0. Keep every promise you make and only make promises you can keep
**Mandatory**
Return a Promise using this prototype function `getResponseFromAPI()`.

### 1. Don't make a promise...if you know you can't keep it
**Mandatory**
Using the prototype below, return a promise. The parameter is a boolean.

### 2. Catch me if you can!
**Mandatory**
Using the function prototype below.

### 3. Handle multiple successful promises
**Mandatory**
In this file, import `uploadPhoto` and `createUser` from `utils.js`. Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.

### 4. Simple promise
**Mandatory**
Using the following prototype.

### 5. Reject the promises
**Mandatory**
Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string). The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`.

### 6. Handle multiple promises

Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`. Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure.

### 7. Load balancer

Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise). The function should return the value returned by the promise that resolved the first.

### 8. Throw error / try catch

Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number). When the denominator argument is equal to 0, the function should throw a new error with the message `cannot divide by 0`. Otherwise it should return the numerator divided by the denominator.

### 9. Throw an error

Write a function named `guardrail` that will accept one argument `mathFunction` (Function). This function should create and return an array named `queue`. When the `mathFunction` function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message `Guardrail was processed` should be added to the queue.

### 10. Await / Async

Import `uploadPhoto` and `createUser` from `utils.js`. Write an async function named `asyncUploadUser` that will call these two functions and return an object with the following format.
