//we CAN'T declare a function basead on a state
let score = 5
if(score > 5){
  function x() {
    return 'pass'
  }
}else{
  function x(){
    return 'not pass'
  }
}
// it will fail in most of the browsers

// function expressions
var bar = function() {
  return arguments.callee
}

bar();
// bar() is a anonymous function, it works better for conditional assignment
// the bad part is that bar() creatas a anonymous function, unless, it get's a name in its declaration
var barz = {
  f: function() {
  }
}
//barz.f() its a anonymous function as well, function assingment to a Object literal are called method literal
// and its easy to create releated function to the same object
var calculator = {
  plus: function() {},
  minus: function(){ },
  div: function(){},
  multiply: function(){}
}

//named functions
// Named functions works like anonymous functions in every way
// except that it can be called to recursion

const a = function calculator() {
  calculator()
}
// its ok to use
a()

// will not find it
calculator()
