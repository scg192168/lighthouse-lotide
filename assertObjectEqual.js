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

console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })); // should log "✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }"
console.log(assertObjectsEqual({ a: { b: 1, c: [2, 3] } }, { a: { b: 1, c: [2, 3] } })); // should log "✅✅✅ Assertion Passed: { a: { b: 1, c: [ 2, 3 ] } } === { a: { b: 1, c: [ 2, 3 ] } }"
console.log(assertObjectsEqual({ a: { b: 1, c: [2, 3] } }, { a: { b: 1, c: [3, 2] } })); // should log "🛑🛑🛑 Assertion Failed: { a: { b: 1, c: [ 2, 3 ] } } !== { a: { b: 1, c: [ 3, 2 ] } }