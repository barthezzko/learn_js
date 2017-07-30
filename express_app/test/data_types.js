var assert = require('assert');
describe('Data types', function () {
    var obj1 = {};
    var obj2 = {};
    var prim1 = 123;
    var prim2 = 123;

    it('two distinct objects are not strictly equal', function () {
        assert.equal(false, obj1 === obj2);
    });
    it('two primitives are strictly equal', function () {
        assert.equal(true, prim1 === prim2);
    });

    it('primitives', function () {
        assert.equal('string', typeof 'asdf');
        assert.equal('boolean', typeof true);
        assert.equal('number', typeof 1234);
        assert.equal('undefined', typeof undefined);
        assert.equal('object', typeof null);
        assert.equal('function', typeof function () {});

    });
    it('objects', function () {
        var simpleObj = {'prop':'prop value'};
        assert.equal('prop value', simpleObj.prop);
        simpleObj.newProp = true;
        assert.equal(true, simpleObj.newProp);
        delete simpleObj.newProp;
        assert.equal(undefined, simpleObj.newProp);
    });
    it('undefined and null', function () {
        var obj = {prop:42};
        assert.equal(42, obj.prop);
        assert.equal(undefined, obj.prop1);
        function f(a,b,c){
            console.log('inside f()')
            assert.equal(1, a);
            assert.equal(undefined, b);
            assert.equal(undefined, c);
        }
        f(1);

    });
    it('falsy values', function(){
        var falsyValues = [false, 0, NaN, ''];
        for (k in falsyValues) {
            console.log('checking for value: ' + falsyValues[k]);
            if (falsyValues[k]) {
                assert.fail(falsyValues[k] + ' is falsy value');
            }
        }

    });
    it('typeof vs instanceof', function () {
        function Bar(){

        }
        assert.equal('object', typeof {});
        assert.equal('object', typeof []);
        assert.equal(true, new Bar() instanceof Bar);
        assert.equal(true, [] instanceof Array);
        assert.equal(false, [] instanceof Bar);
        assert.equal(true, [] instanceof Object);
    });
    it('equality', function () {
        
    });
});