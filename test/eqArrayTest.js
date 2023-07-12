const eqArrays = require('../eqArrays');

// const eqArrays = function(array1, array2) {
//   if (array1.length != array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if ((Array.isArray(array1[i]))) {
//       if (!eqArrays(array1[i], array2[i])) {
//         return false;
//       }
//       continue;
//     }

//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

module.exports = eqArrays;

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["3", "2", 1])); // => false