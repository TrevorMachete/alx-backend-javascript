export default class HolbertonClass {
    constructor(size, location) {
      if (typeof size !== 'number') throw TypeError('Size must be a number');
      if (typeof location !== 'string') throw TypeError('Location must be a string');
  
      this._size = size;
      this._location = location;
    }
  
    get size() {
      return this._size;
    }
  
    set size(newSize) {
      if (typeof newSize !== 'number') throw TypeError('Size must be a number');
      this._size = newSize;
    }
  
    get location() {
      return this._location;
    }
  
    set location(newLocation) {
      if (typeof newLocation !== 'string') throw TypeError('Location must be a string');
      this._location = newLocation;
    }
  
    // When the class is cast into a Number, it should return the size
    valueOf() {
      return this._size;
    }
  
    // When the class is cast into a String, it should return the location
    toString() {
      return this._location;
    }
  }
  