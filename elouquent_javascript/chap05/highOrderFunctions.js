"use strict"
// samples

//  a function that its value is another function
// greaterThen its a high-order function cause its returns the creation of a new function
function greaterThen(a){ 
    return function comparsion(b){ return b > a }
}

let greaterThen10 = greaterThen(10) // the VALUE of greaterThen10 its a function 
console.log(greaterThen10(11)) // when we call, greaterThen10 variable... we expect to receive one more value to get this comparsion

// we also can call greaterThen with both values.. the first that the declaration waits.. and then the other to the value of 
// the declaration`
console.log(greaterThen(10)(12))

// we can also have a function that changes the other function

function noisy(newFunction){
    
    return function(withArg) { 
        // console.log("receiving the arg", withArg)
        // console.log("calling the new function")
        
        var val = newFunction(withArg)
        // console.log('returning the new value from a function with args: ', val)
        return val
    }
}

let stringFunction = noisy(String)("String")
let booleanValue = noisy(Boolean)(true)
let newInteger = noisy(parseInt)("10")

// console.log("stringFunction", stringFunction)
// console.log("booleanValue", booleanValue)
// console.log("newInteger", newInteger)

// also we with high order functions we can provide new flow control

function unless(condition, then) { 
    if(! condition) {
        then()
    }
}

[0, 1,2,3].forEach( 
    (n) => {
        unless(n % 2, () => console.log(n, ' is even'))
    }
)
