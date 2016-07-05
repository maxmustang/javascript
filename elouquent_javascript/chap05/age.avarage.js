"use strict"
const ANCESTRY_FILE = require('./ancestry')

let ancestry = JSON.parse(ANCESTRY_FILE)

function age(person) { return person.died - person.born }

let ages = (array) => { 
    return array.reduce( (min, cur) => min += age(cur), 0)
}

function avarage( typedArray ) { 
    return ages( typedArray ) / typedArray.length 
}

let femaleArray = ancestry.filter((person) => person.sex == 'f' )  
avarage(femaleArray)
let femaleAvg =


function male(p) { return p.sex == "m"; }
avarage(ancestry.filter(male).map(age))

console.log(femaleAvg)
