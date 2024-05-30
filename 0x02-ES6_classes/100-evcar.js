// file: 11-main.js

// eslint-disable-next-line import/no-self-import
import EVCar from './100-evcar';

const myEVCar = new EVCar('Tesla', 'electric', 'red', '300 miles');
const myClonedCar = myEVCar.cloneCar();

console.log(myEVCar);
console.log(myClonedCar);
