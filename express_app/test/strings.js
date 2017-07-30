var assert = require('assert');
describe('Strings', function () {
    it('like array', function () {
        assert.equal('abc'[1], 'b');
        assert.equal('abc'[3], undefined);
    });
    it('operations', function () {
        var splitted = 'ab c'.split(' ')
        assert.equal(splitted[0], 'ab');
        assert.equal(splitted[1], 'c');
        assert.equal('abc'.split('').length, 3);

        //indexOf
        assert.equal('abc'.indexOf('x'), -1);
        assert.equal('abc'.indexOf('b'), 1);

        assert.equal(' \n \t abc '.trim(), 'abc');

        assert.equal('abc'.slice(1,2), 'b');
    });
});