// import function from 'chai' library

const assert = require('chai').assert;
const head = require('../tail');

const assertEqual = require('../assertEqual');

const tail = function(array) {
  console.log(array);
  return array.slice(1);
};
console.log(tail([1, 6, 7, 8]));
console.log(tail(["Hello", "Lighthouse", "Labs"]));

module.exports = assertEqual;