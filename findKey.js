const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 },

}

const result = findKey(obj, x => x.stars === 2);
console.log(result);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertation passed ${actual} === ${expected}`);
  } else {
    console.log(`Assertation failed ${actual} !== ${expected}`);
  }
};

// Test case 1: key found
const obj1 = {
  "key1": { value: "abc" },
  "key2": { value: "def" },
  "key3": { value: "ghi" },
};
const result1 = findKey(obj1, x => x.value === "def");
assertEqual(result1, "key2");

// Test case 2: key not found
const obj2 = {
  "key1": { value: "abc" },
  "key2": { value: "def" },
  "key3": { value: "ghi" }
};
const result2 = findKey(obj2, x => x.value === "xyz");
assertEqual(result2, undefined);

// Test case 3: Empty object
const obj3 = {};
const result3 = findKey(obj3, x => x.value === "xyz");
assertEqual(result3, undefined);

