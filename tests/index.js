import { strict as assert } from 'node:assert';
import binarySearch from '../index.js';

assert.equal(binarySearch([1, 3, 6, 10, 24], 3), 1);
assert.equal(binarySearch([1, 3, 6, 10, 24], 33), -1);
assert.equal(binarySearch([-3, -1, 0, 10, 24], -3), 0);
