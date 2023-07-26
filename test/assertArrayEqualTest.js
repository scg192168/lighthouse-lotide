// import function 'eqArrays'
const eqArrays = require("../eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Arrays are equal");
  } else {
    console.log("Arrays are not equal");
  }
};
// export function 'assertArraysEqual'

module.export = assertArraysEqual; 

console.log(assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]));