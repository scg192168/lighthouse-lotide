/** the function 'tail' takes an array as input and returns a 
new array containing all elements of the input array except for the 
first element */

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;
