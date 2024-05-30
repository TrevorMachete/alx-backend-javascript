import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Assign brand, motor, and color to the parent class Car
    if (typeof range !== 'string') throw TypeError('Range must be a string');
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    if (typeof newRange !== 'string') throw TypeError('Range must be a string');
    this._range = newRange;
  }

  cloneCar() {
    // Create a new Car object with the same brand, motor, and color
    return new Car(this._brand, this._motor, this._color);
  }
}
