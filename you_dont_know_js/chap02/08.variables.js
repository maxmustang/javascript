// Functions Scope
// Use the var keyword to declare a variable that will belong to the function scope, or the global scope if its outside
// a function scope

// Hoisting
// Happens when a variable is declared anywhere in the scope, this var declarion will be moved to the top of the function
// in compilation pharse

var a = 2

foo()

function foo() {
  a = 3
  console.log(a)//will log 3
  var a //this `a` variable will be thowed to the first line in compilation pharse
}

console.log(a) //will log 2

//Nested scopes
//A declared variable in a function will be avaliable in the function scope and in any inner/lower scope as well

function foo() {
  var a = 1
  function bar() {
    var b = 2
    function ciz() {
      var c = 3
      console.log(a,b,c)//1,2,3
    }
    ciz()
    console.log(a,b)//1,2
  }
  bar()
  console.log(a)//1
}

//if I try to set a variable that hasnt been declared, I will create a variable in the top-level scope(global)
// or getting an error depending on `strict mode`

function x() {
  a = 1 // `a` wasnt declared in the function, so it'll be settled in the global scope
}
x()
a // 1

//let allow me to create a variable that only lives in the block scope
