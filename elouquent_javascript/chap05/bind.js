"use strict"
var ANCESTRY_FILE = require('./ancestry')
var ancestry = JSON.parse(ANCESTRY_FILE)

var theSet = ["Carel Haverbeke", "Maria van Brussel",
              "Donald Duck"];
function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person) {
    return isInSet(theSet, person);
}));

var filteredBind = ancestry.filter(isInSet.bind(null, theSet))
console.log(filteredBind)