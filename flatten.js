//  function named flatten that takes an array as input and returns 
// a new array containing all the elements of the input array in a 
// flattened form

const flatten = function(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let x = 0; x < array[i].length; x++) {
        newArray.push(array[i][x]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));