// The fucntion 'findKeyByValue' takes an object 
// and a value as input and returns the key 
// corresponding to that value in the object

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

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log("Test Passed:", actual);
  } else {
    console.error("Test Failed. Expected:", expected, "But received:", actual);
  }
}
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);