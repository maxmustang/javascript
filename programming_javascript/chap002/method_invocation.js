//unless I use method invocation, the `this` will reference to the global scope
// when calling it if is a function
function x() {
    this.a // references to `a` from global scope, not functions
}
let object = { a: 1, x: () => object.a } //references to the object.a
console.log(object.x())

// when invoke an function using method invokation with .(dot notation)
// I get access of the object propeties using `this`
function highPass(number, cutoff) {
  cutoff = cutoff || this.cutoff;
  console.log('number: ', number, ' cutoff', cutoff)
  return (number >= cutoff);
}
var filter1 = { highPass: highPass, cutoff: 5}
var filter2 = {cutoff: 3 }; // No highPass here!

// the number parameter is comparared to the cutoff(5)
// from the object filter1 using the `this.cutoff` that is disponible cause
// we are using the method invokation pattern with dot notation
var result1 = filter1.highPass(3)
console.log("result1: " + result1)


// in this example, the `call` method(that is inherited from Function.prototype)
// delegates the filter2 scope(attributes) to the highPass function
// so, it will have access to the filter.cutoff
var result2 = highPass.call(filter2, 4) // -> applying to highPass() the parameter 4 for number
// and the cutoff as 3 from the filter2 scope
console.log("result2: " + result2)

// it could be done with .apply besides .call
// the difference is that .call expect an list of arguments
  // .call(object, arg1,arg2,arg2)
// and call just an .apply expect an array
  // .apply(object, [arg1,arg2,arg3])
