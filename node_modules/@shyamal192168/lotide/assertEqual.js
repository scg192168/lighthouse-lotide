// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertation passed ${actual} === ${expected}`);
  } else {
    console.log(`Assertation failed ${actual} !== ${expected}`);
  }
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual(5, 6));

module.exports = assertEqual;
