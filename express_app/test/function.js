var assert = require('assert');
describe('function', function () {
    assert.equal(smth(), 1); //but not func expression
    //function declaration
    function smth(){
        return 1;
    }
    //function expression
    var add = function (param1, param2) {
        console.log(param1, param2)
        return param1 + param2;
    };
    it('basic', function () {
        assert.equal(smth(), 1);
        assert.equal(add(1,2), 3);
    });

    var argumentsUser = function(a,b,c){
        return arguments;
    }
    var args = argumentsUser(1,'qwer', true);
    assert.equal(args[0], 1);
    assert.equal(args[1], 'qwer');
    assert.equal(args[2], true);
});