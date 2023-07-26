// the function 'tail' takes an array as input and returns a 
// new array containing all elements of the input array except for the 
// first element. 

const tail = function(array) {
  console.log(array);
  return array.slice(1);
};
console.log(tail([1, 6, 7, 8]));
console.log(tail(["Hello", "Lighthouse", "Labs"]));

module.exports = tail;
