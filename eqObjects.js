/** function 'eqObjects' checks two objects 'object1' and 'object2' are
equal based on their keys and corresponding values */

function eqObjects(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  console.log("=====", keys1, keys2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" }; 

module.exports = eqObjects;