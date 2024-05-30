// file: main.js

import Pricing from './4-pricing';
import Currency from './3-currency';

const currency = new Currency('USD', 'United States Dollar');
const price = new Pricing(100, currency);
console.log(price.displayFullPrice()); // Output: 100 United States Dollar (USD)

console.log(Pricing.convertPrice(100, 1.2)); // Output: 120
// Add other code as needed
