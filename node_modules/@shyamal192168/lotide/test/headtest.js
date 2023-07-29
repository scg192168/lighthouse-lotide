// import 'assert' function from 'chai' library, allowing us to use
// 'assert' methods

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head([5, 6, 7]), '5');
});

module.exports = head;