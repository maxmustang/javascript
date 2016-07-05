"use strict"
// Functions are the only things in Javascript that create a new scope.
// So if we want to that our module have their own scope, we'll have to base 
// then into modules

// var names = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];

// function dayName(i) {
//     return names[i]
// }

// console.log(dayName(1))

//always prefere to take variables out of the global scope

var dayName = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];
  return {
      name: (i) => names[i],
      number: (name) => names.indexOf(name) + 1
      
  }
}();

console.log(dayName.name(1))
console.log(dayName.number("Saturday"))