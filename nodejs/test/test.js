// test.js

const assert = require('assert');
const add = require('../app');

describe('Addition', () => {
  it('should return the sum of two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(add(-2, 3), 1);
  });

  it('should handle zero', () => {
    assert.strictEqual(add(0, 3), 3);
  });
});

