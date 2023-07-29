// function named middle that takes an array as input and returns 
// a new array containing the middle element(s) of the input array. 

const middle = function(array) {
  let newArray = [];
  if (array.length === 1 || array.length === 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    var evenArray = (array.length - 1) / 2;
    var intDown = Math.floor(evenArray);
    var intUp = Math.ceil(evenArray);
    newArray.push(array[intDown]);
    newArray.push(array[intUp]);
    return newArray;
  } else {
    var oddArray = (array.length - 1) / 2;
    newArray.push(array[oddArray]);
    return newArray;
  }
};

module.exports = middle;