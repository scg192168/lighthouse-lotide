/** Use 'assertObjectEqual' function to compare two arrays for passing 
 * @params array1 is a type of array;
 * @params array2 is a type of array;
 * @return "true";
 * @return "false";
*/
const assertObjectsEqual = function(array1, array2) {
  
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!assertObjectsEqual(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = assertObjectsEqual;