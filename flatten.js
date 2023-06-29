cosnt flatten = function (array) {
  //create a new array
  var newArray = [];
  for (let i = 0; i < array[i]; i++) {
    if (Array.isArray(array[i])) {
      for (let x = 0; x <array[i].length; x++) {
        newArray.push(array[i][x]);
      }
    } else {
      newArray.push(array[i])
    }
  }
  return newArray;
};

cconsole.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 5, 6]