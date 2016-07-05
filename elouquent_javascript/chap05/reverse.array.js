"use strict"
let array = [1,2,3,4,5]
var reverse = (array) => {
    var na = []
    for(let i = 0; i < array.length; i++){
        na.push(array[array.length - 1 - i])
    }
    return na
}


console.log( reverse( array ) )