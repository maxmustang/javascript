"use strict"
//when use strict is enabled, javascript will throw errors as soons as possible
// if we call a constructor function without the new, and, with NOT the strict mode enabled
// when we try to give a value for the construtor instance, the this will be bound to the global
// witch the strict mode enabled, it will throw an error

function Person(name) {
    this.name = name
}
//without strict mode
var person = Person('Max')
console.log(name) // Max, the name value will be bound to the name in global
// with strict mode on.. it will throw an error

