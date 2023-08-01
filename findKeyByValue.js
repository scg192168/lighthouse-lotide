// The fucntion 'findKeyByValue' takes an object 
// and a value as input and returns the key 
// corresponding to that value in the object

const asserEqual = require("./assertEqual");

function findKeyByValue(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
}
const bestTVShowsByGenre = {
  sci_fi: "The Expense",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
