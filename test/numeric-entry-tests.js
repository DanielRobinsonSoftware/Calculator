var expect = require("expect.js");
var calculator = require("../src/calculator.js");
var events = require("events");

describe('calculator', function(){

    it('should allow a number to be the first character entered', function(){
        var accepted = calculator.acceptCharacter('1');
        expect(accepted).to.be(true);
    });
    
    it('should not allow a letter to be the first character entered', function(){
        var accepted = calculator.acceptCharacter('a');
        expect(accepted).to.be(false);
    });
   
    it('should allow the equals sign to be the first character', function(){
        var accepted = calculator.acceptCharacter('=');
        expect(accepted).to.be(true);
    });
   

});