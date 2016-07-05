"use strict"

let months = function() {
    let m = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"];
    
    return {
        name: (n) =>  m[n],
        number: (s) =>  m.indexOf(s) 
    }
}()


console.log(months.name(1))
console.log(months.number("January"))