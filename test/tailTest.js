// import function from 'chai' library

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 8 for [1, 6, 7, 8]", () => {
    assert.deepEqual(tail([1, 6, 7, 8]), [6, 7, 8]);
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});