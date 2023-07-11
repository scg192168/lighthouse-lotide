// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertation passed ${actual} === ${expected}`);
  } else {
    console.log(`Assertation failed ${actual} !== ${expected}`);
  }
};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(5, 6);

module.exports = assertEqual;
