// a lambda is a function that can be used as data
// it can be used as the same way any other expression can
  // lambda can be used as parameter to others function
  // lambda can be used as the return value of a function
  // and lambda can be used as any other literal

let sum = function sum(){
  let result = 0

  [1,2,3,4,5].forEach(function addTo(number) { result += number } )
  return result
}
sum() === 15 // -> true

// the .addTo function is a lambda cause its a function used as a parameter to other function
// .forEach its a function enumerator
// in javascript, lambda are used to
    // perform operations on the other argument as .addTo
    // attach eventHandlers throw the DOM
    // as callbacks
    // as function decorator.. adding functionality to other functions
    // reuturn a function from other function.. as curry
// in fact.. lambdas are functions that are treated as data nomatter if it has a name or not


//high-order functions are functions that consume or return functions as data
