// 0-calcul.test
const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { describe } = require('node:test');

describe('calculateNumber', () => {
    it('should correctly sum rounded numbers', () => {
        assert.strictEqual(calculateNumber(2.3, 3.7), 6);
        assert.strictEqual(calculateNumber(1.5, 2.8), 4);
    });
});
