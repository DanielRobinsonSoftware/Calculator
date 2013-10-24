var expect = require("expect.js");
var calculator = require("../src/calculator.js");

describe('calculator', function(){

    it('should allow a number to be the first character entered', function(){
        var accepted = calculator.acceptCharacter('1');
        expect(accepted).to.be('1');
    });
    
});