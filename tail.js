const tail = function(array) {
  console.log(array);
  return array.slice(1);
};
console.log(tail([1, 6, 7, 8]));
console.log(tail(["Hello", "Lighthouse", "Labs"]));
