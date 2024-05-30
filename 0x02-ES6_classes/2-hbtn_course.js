// file: HolbertonCourse.js

const name = Symbol('name');
const length = Symbol('length');
const students = Symbol('students');

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('name must be a string');
    }
    this[name] = value;
  }

  get name() {
    return this[name];
  }

  set length(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('length must be a non-negative number');
    }
    this[length] = value;
  }

  get length() {
    return this[length];
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new Error('students must be an array of strings');
    }
    this[students] = value;
  }

  get students() {
    return this[students];
  }
}
