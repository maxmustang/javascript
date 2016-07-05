"use strict"
const ANCESTRY_FILE = require('./ancestry')

let ancestry = JSON.parse(ANCESTRY_FILE)

// finding people between 1900 and 1924
function filter(array, condition) { 
    var persons = []
    for(let i = 0; i < array.length; i ++) { 
        if(condition(array[i])) {
            persons.push(array[i])
        }
    }
    
    return persons
}

function youngBetweenDates(person) { 
    return person.born >= 1900 && person.born <= 1926
}

let people = filter(ancestry, youngBetweenDates)
console.log(people)

// ower filter function is considered a pure function cause its dont CHANGE the array that receives..
// but produces a new one

// standart usege

let standartPeople = ancestry.filter((person) => youngBetweenDates(person) )

console.log("standartPeople: ", standartPeople)
