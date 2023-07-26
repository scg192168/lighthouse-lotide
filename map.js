// implement 'map' function and 'assertArraysEqual' function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const eqArrays = require("./eqArrays");
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Arrays are equal");
  } else {
    console.log("Arrays are not equal");
  }
};

//using the custom map function
let words = ["hello", "world", "this", "is", "map"];
let firstChar = function(word) { return word[0]; };
const result = map(words, firstChar);

assertArraysEqual(result, ["h", "w", "t", "i", "m"]);
console.log(result);
