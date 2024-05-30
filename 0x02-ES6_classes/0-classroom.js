// file: ClassRoom.js

const maxStudentsSize = Symbol('maxStudentsSize');

export default class ClassRoom {
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number' || maxStudentsSize < 0) {
      throw new Error('maxStudentsSize must be a non-negative number');
    }
    this[maxStudentsSize] = maxStudentsSize;
  }

  // Add other methods and properties as needed

  // Example method that uses the _maxStudentsSize property
  getMaxStudentsSize() {
    return this[maxStudentsSize];
  }
}
