// the function 'takeUntil' creates a new array by copying elements from the original array
// until the callback function returns a truthy value

const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;