/** Use 'eqArrays' function to compare two arrays for equality 
 * @params array1 is a type of array;
 * @params array2 is a type of array;
 * @return true or false;
*/

const eqArrays = function(array1, array2) {
  const array1length = array1.length;
  const array2length = array2.length;
  if (array1length != array2length) {
    return false;
  }

  for (let i = 0; i < array1length; i++) {
    if ((Array.isArray(array1[i]))) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
      continue;
    }

    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

/**  export the function 'eqArrays' */

module.exports = eqArrays;