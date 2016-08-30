//Strict mode

//Strict mode allows lots of optimizable stuff by the engine
// removes some behaviors, for example set a global variable inside a function scope
function for() {
  "use strict"
  a = 1 //throws a ReferenceError and not set `a` in the global scope
}
foo()
