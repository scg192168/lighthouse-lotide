/** three functions have been used 'eqArrays', 'assertArrayEqual' and 'without' */

const without = function(array1, arrayExclude) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    const item = array1[i];
    if (exclude(item, arrayExclude) === false) {
      result.push(item);
    }
  };
  return result;
};
const exclude = function(item, arrayExclude) {
  for (let x = 0; x < arrayExclude.length; x++) {
    const pullOut = arrayExclude[x];
    if (pullOut === item) {
      return true;
    }
  }
  return false;
};

module.exports = without;