// Import the 'eqArrays' function

const eqArrays = require("./eqArrays");

// Use functions 'eqArray' and 'assertArrayEqual' to compare arrays for equlity

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Arrays are equal");
  } else {
    console.log("Arrays are not equal");
  }
};
// expors=t the 'assertArraysEqual' function
module.exports = assertArraysEqual; 
