// file: 5-building.js

const sqft = Symbol('sqft');

export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('sqft must be a non-negative number');
    }
    this[sqft] = value;
  }

  get sqft() {
    return this[sqft];
  }

  // Add the evacuationWarningMessage method inside the class
  evacuationWarningMessage() {
    if (new.target === Building) {
      throw new TypeError('Cannot construct Building instances directly');
    }
    if (!this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
