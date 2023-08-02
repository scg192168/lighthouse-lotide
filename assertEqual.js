/** Use 'assertEqual' function to compare two arrays for passing 
 * @params actual is a type of array;
 * @params expected is a type of array;
 * @return "Assertion passed";
 * @return "Assertion failed";
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertation passed ${actual} === ${expected}`);
  } else {
    console.log(`Assertation failed ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
