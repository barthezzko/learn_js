var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
   });
    describe('simple properties', function() {
        it('string length should be 3', function() {
            assert.equal(3, 'abc'.length);
        });
    });
});