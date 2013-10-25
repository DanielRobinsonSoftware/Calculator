(function () {
  
  var calculator = {};

  calculator.acceptCharacter = function(input){
    if (input == '=') return true;
    return parseFloat(input) == input;
  };

  calculator.setup = function(){
    var stdin = process.stdin;
    stdin.setRawMode( true );
    stdin.resume();
    stdin.setEncoding( 'utf8' );
    return stdin;
  };

  calculator.run = function(stdin){
    stdin.on( 'data', function(key){
      if (calculator.acceptCharacter(key)){        
        process.stdout.write( key );
        if ( key === '=' ) {
          process.exit(1);
        }
      }     
    });
  };

  calculator.start = function(){
    var stdin = calculator.setup();
    calculator.run(stdin);
  };

  module.exports = calculator;
  exports.start = calculator.start;

  calculator.start();

})();