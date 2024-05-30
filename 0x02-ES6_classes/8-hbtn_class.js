// file: 8-holberton-class.js

const size = Symbol('size');
const location = Symbol('location');

export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('size must be a non-negative number');
    }
    this[size] = value;
  }

  get size() {
    return this[size];
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new Error('location must be a string');
    }
    this[location] = value;
  }

  get location() {
    return this[location];
  }

  // Override the valueOf method to return the size when the class is cast into a Number
  valueOf() {
    return this.size;
  }

  // Override the toString method to return the location when the class is cast into a String
  toString() {
    return this.location;
  }
}
