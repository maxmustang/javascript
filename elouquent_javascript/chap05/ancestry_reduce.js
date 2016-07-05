"use strict"
var ANCESTRY_FILE = require('./ancestry')
var ancestry = JSON.parse(ANCESTRY_FILE)



let overNinetyReduce = ancestry.reduce((diedPeopleOver90, person) => {
    
    function verifyIfIsOver90(person) { return person.died - person.born  > 90}
    
    if(verifyIfIsOver90(person)) { 
        diedPeopleOver90.push(person)
    }
    return diedPeopleOver90
}, [])

// console.log(overNinetyReduce)

// if my array contains at least one element, i dont need to inform the current start argument

// finding the most ancient relative

let relative = ancestry.reduce((minimalOcurrence, person) => { 
    if(person.born < minimalOcurrence.born) return person 
    else return minimalOcurrence
})
console.log("--------> last died", relative)