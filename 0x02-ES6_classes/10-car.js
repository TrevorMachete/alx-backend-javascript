// file: 10-main.js

// eslint-disable-next-line import/no-self-import
import Car from './10-car';

const myCar = new Car('Tesla', 'electric', 'red');
const myClonedCar = myCar.cloneCar();

console.log(myCar);
console.log(myClonedCar);
