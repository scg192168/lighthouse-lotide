/** import function 'eqArrays' */
const assertArraysEqual = require("../assertArraysEqual");

console.log(assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]));