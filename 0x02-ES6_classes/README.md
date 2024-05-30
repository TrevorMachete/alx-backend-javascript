# 0x02. ES6 classes

This project includes several tasks related to ES6 classes.

## Tasks

### 0. You used to attend a place like this at some point

In this task, we implement a class named `ClassRoom`. This class accepts one attribute named `maxStudentsSize` (Number) and assigns it to `_maxStudentsSize`.

### 1. Let's make some classrooms

In this task, we import the `ClassRoom` class from `0-classroom.js` and implement a function named `initializeRooms`. This function returns an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

### 2. A Course, Getters, and Setters

In this task, we implement a class named `HolbertonCourse`. The constructor attributes are `name` (String), `length` (Number), and `students` (array of Strings). We verify the type of attributes during object creation. Each attribute is stored in an “underscore” attribute version (ex: name is stored in `_name`). We implement a getter and setter for each attribute.

### 3. Methods, static methods, computed methods names..... MONEY

In this task, we implement a class named `Currency`. The constructor attributes are `code` (String) and `name` (String). Each attribute is stored in an “underscore” attribute version (ex: name is stored in `_name`). We implement a getter and setter for each attribute. We also implement a method named `displayFullCurrency` that returns the attributes in the following format `name (code)`.

### 4. Pricing

In this task, we import the class `Currency` from `3-currency.js` and implement a class named `Pricing`. The constructor attributes are `amount` (Number) and `currency` (Currency). Each attribute is stored in an “underscore” attribute version (ex: name is stored in `_name`). We implement a getter and setter for each attribute. We also implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`. We implement a static method named `convertPrice`. It accepts two arguments: `amount` (Number), `conversionRate` (Number). The function returns the amount multiplied by the conversion rate.

### 5. A Building

In this task, we implement a class named `Building`. The constructor attribute is `sqft` (Number). Each attribute is stored in an “underscore” attribute version (ex: name is stored in `_name`). We implement a getter for each attribute. This class is considered as an abstract class. Any class that extends from it should implement a method named `evacuationWarningMessage`. If a class that extends from it does not have an `evacuationWarningMessage` method, it throws an error with the message `Class extending Building must override evacuationWarningMessage`.

### 6. Inheritance

In this task, we import `Building` from `5-building.js` and implement a class named `SkyHighBuilding` that extends from `Building`. The constructor attributes are `sqft` (Number) (must be assigned to the parent class `Building`) and `floors` (Number). Each attribute is stored in an “underscore” attribute version (ex: name is stored in `_name`). We implement a getter for each attribute. We override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

### 7. Airport

In this task, we implement a class named `Airport`. The constructor attributes are `name` (String) and `code` (String). Each attribute is stored in an “underscore” attribute version (ex: name is stored in `_name`). The default string description of the class returns the airport code.

### 8. Primitive - Holberton Class

In this task, we implement a class named `HolbertonClass`. The constructor attributes are `size` (Number) and `location` (String). Each attribute is stored in an “underscore” attribute version (ex: name is stored in `_name`). When the class is cast into a Number, it returns the size. When the class is cast into a String, it returns the location.

### 9. Hoisting

In this task, we fix a given code and make it work.

### 10. Vroom

In this task, we implement a class named `Car`. The constructor attributes are `brand` (String), `motor` (String), and `color` (String). Each attribute is stored in an “underscore” attribute version (ex: name is stored in `_name`). We add a method named `cloneCar`. This method returns a new object of the class.

### 11. EVCar

In this task, we import `Car` from `10-car.js` and implement a class named `EVCar` that extends the `Car` class. The constructor attributes are `brand` (String), `motor` (String), `color` (String), and `range` (String). Each attribute is stored in an “underscore” attribute version (ex: name is stored in `_name`). For privacy reasons, when `cloneCar` is called on an `EVCar` object, the object returned should be an instance of `Car` instead of `EVCar`.
