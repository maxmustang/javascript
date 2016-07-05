"use strict"
const ANCESTRY_FILE = require('./ancestry')
var ancestry = JSON.parse(ANCESTRY_FILE)

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var centurys = {}
ancestry.filter((person) => {
   var witchCentury = Math.ceil(person.died/100)
   centurys[witchCentury] ? centurys[witchCentury].push(person)  : centurys[witchCentury]  = [person]
})

for(let c in centurys) { 
    var ages = function(person) {
        return person.died - person.born
    }
    var x = centurys[c].map((p ) => ages(p))
    console.log(c + "======== ", average(x) )
}
