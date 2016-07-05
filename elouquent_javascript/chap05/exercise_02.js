"use strict"
const ANCESTRY_FILE = require('./ancestry')
var ancestry = JSON.parse(ANCESTRY_FILE)

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

let byName = {}
ancestry.forEach((person) => {
    byName[person.name] = person
})

var diff = ancestry.filter((person) => {
      return byName[person.mother] || null 
    }).map((person) => person.born - byName[person.mother].born )
    
    console.log(average(diff))