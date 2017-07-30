var assert = require('assert');
describe('Equality', function () {
    it('lenient', function () {
        assert.ok(1 == 1, 'should be true');
        assert.ok(3 / 0 === Infinity, 'should be true');
    });
});