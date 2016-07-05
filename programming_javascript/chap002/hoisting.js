// previouly in function_scope.js file

// its a term to describe that all variables are declared in the top of the function
// javascript build passes
  // step one, first check for all variables and functions declarations
  // step two, in the execution step, all the functions will be avaliable, but,
    // the variables will still been undefined

// in the first step, only the function declaration occures
// so x still been undefined in both scope, functions and global
// so in pass two, the inner scope will be declared BUT not initialized
// and it still be undefined
var x = 1;
(function(){
  // inside the function scope, x was not defined yet
  // on both steps
  console.log('First x definition', x)
  var x = 2
}());

// function behaves is a little different
function init() {
  function number(){ return 5 }
  
  
  console.log('- ', number());// will return 5 
  //iffe
  (function() {
    
    // the inner number function will be declared before the console.log
    // so it will return 2 and not 5
    console.log(number() === 2, 'number will return 2 and not 5')
    function number(){ return 2 }
  }());
}
// cause of the Hoisting, in the function numbers in inner function of init()
// will be declared first and then when the test comes.. it'll return 2 and not 5
init()

//its equivalent to:
  function init2() {
    function number() { return 5}
    (function() {
        function number() { return 2}
        console.log('explained hoisting: ', number() === 2)
    }());
    console.log('on the outside, number is equals 5', number() === 5 )
  }
init2()

// continues in the function_expression_hosting.js file
