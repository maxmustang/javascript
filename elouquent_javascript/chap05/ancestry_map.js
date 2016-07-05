"use strict"

var ANCESTRY_FILE = require('./ancestry')
var ancestry = JSON.parse(ANCESTRY_FILE)
// -------------> OLD way to do the map
function map(array, transform) {
    var map = [] 
    for (let i = 0; i < array.length; i++){ 
        map.push(transform(array[i]))
    }
    return map
}

function overNinetyFilterOldWay(array, condition){
   let filteredArray = [] 
   for(let i = 0; i < array.length ; i++) { 
       if(condition(array[i]))  
           filteredArray.push(array[i])
   } 
   
   return filteredArray
}

function verifyIfDiedOver90(person){ 
    return person.died - person.born > 90
}

let filteredPersonsOldWay = overNinetyFilterOldWay(ancestry, verifyIfDiedOver90)
let people = map( filteredPersonsOldWay, function(person) { return person.name } )
console.log('--------> OLD_WAY', people)

// -------------> new way

let overNinetyFilter = ancestry.filter((person) => person.died - person.born > 90)
let transformation = (person) => person.name

people = overNinetyFilter.map(transformation)

console.log("------->", people)