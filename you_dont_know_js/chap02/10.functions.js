//Functions are values in javascript, that I can pass it as a argument
//as I can receive it as a  variable

var foo = function() { //its anonymous function cause it has no name
}

var x = function bar() {//named function
}

//IIFEs(Immediately Invoked Function Expressions)
//its way to execute a function expression

(function iife(){
  console.log('hello')
})()//hello

// the outer () on the expressions is a javascript grammar nuance to prevent it to be treated as normal
// function declarion
//
// the final () is what actually executes the function

function foo() {}//function declaration
foo() // execute function

(function bar(){})()//invoke function after been declared

//variables declared in a IIFE function wont affect the sorrounding code outside the iife
var a = 42
(function iife(){
  var a = 10
  console.log(a)//10
})()
console.log(a)//42

//iife can also return values
var x = (function() {
  'use strict';
    return 42
}());

console.log(x)//42
