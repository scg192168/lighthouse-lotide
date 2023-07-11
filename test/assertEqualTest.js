const assertEqual = require('../assertEqual');

// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertation passed ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertation failed ${actual} !== ${expected}`);
//   }
// };

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(5, 6);

const head = function(array) {
  console.log(array);
  return array[0];
};

assertEqual(head([5,6,7]), 5);
console.log(head([1,6,7,8]));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = assertEqual;