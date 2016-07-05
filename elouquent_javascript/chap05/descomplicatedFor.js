"use strict"
var array = [1,2,3,4,5]

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])    
// }

// function logEach(array) {
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i])    
//     }
// }

// logEach(array)

function forEach(array, action) { 
    for(let i = 0; i < array.length; i++){
        action(array[i])    
    }
}

// forEach(array, console.log)
let sum = 0
forEach(array, (it) => sum += it )
console.log(sum)