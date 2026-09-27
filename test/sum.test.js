const assert = require('assert');
const { sum } = require('../sum');

assert.strictEqual(sum(2, 3), 5, 'sum(2, 3) should equal 5');
assert.strictEqual(sum(-1, 1), 0, 'sum(-1, 1) should equal 0');
assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) should equal 0');

console.log('All sum() tests passed.');
