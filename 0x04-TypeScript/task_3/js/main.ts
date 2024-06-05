/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create an object called row with the type RowElement
let row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Create a const variable named newRowID with the type RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log('Insert row', row);

// Create a const variable named updatedRow with the type RowElement
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);

// Call the deleteRow command
CRUD.deleteRow(newRowID);
console.log('Delete row id', newRowID);
