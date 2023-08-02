/** Import the 'eqArrays' function */

const eqArrays = require("./eqArrays");

/** Use 'assertArrayEqual' function to compare two arrays for equality 
 * @params array1 is a type of array;
 * @params array2 is a type of array;
 * @return "Arrays are equal";
 * @return "Arrays are not equal"
*/
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Arrays are equal");
  } else {
    console.log("Arrays are not equal");
  }
};
/**  expors=t the 'assertArraysEqual' function */
module.exports = assertArraysEqual; 
