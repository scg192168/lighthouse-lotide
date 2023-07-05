function eqObjects(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  console.log("=====", keys1, keys2);
  //const animal1 = {legs: 4, eyes: 2, horn: 0, head: 1};
  //const animal2 = {legs: 4, eyes: 2, horn: 2, head: 1};
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    //console.log("___", key);
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject));