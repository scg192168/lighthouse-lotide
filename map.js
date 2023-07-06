// const words = ["ground", "control", "to", "major", "tom"];
// // const map = function() {
// //   const results = [];
// //   return results;
// // }
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word[0]);
// console.log(results1);


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

// Test 1: Get the first letter of each word in an array
//let words = ["hello", "world", "this", "is", "map"];
//let firstChar = function(word) { return word[0]; };
//console.log(assertArraysEqual(map(words, firstChar), ["h", "w", "t", "i", "m"]));

// // Test 2: Get of each word in an array
// let getLength = function(word) { return word.length; };
// assertArraysEqual(map(words, getLength), [5, 5, 4, 2, 3]);

// // Test 3: Convert all words in the array to uppercase
// let toUpper = function(word) { return word.toUpperCase(); };
// assertArraysEqual(map(words, toUpper), ["HELLO", "WORLD", "THIS", "IS", "MAP"]);