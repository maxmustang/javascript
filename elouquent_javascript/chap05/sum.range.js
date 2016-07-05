"use strict"
let range = (start, end, step) => {
    let newArray = []
    if( step < 0 ){
        for( start; end <= start; start--){
            newArray.push(start)
        }
    }else{
        for(let i = start; i < end; i = i + step){
            newArray.push(i)
        }    
    }
    
    return newArray
}

let ranged = range(5, 2, -1)

let sum = (ns) => { return ns.reduce( (n, nsn) => { return n + nsn }, 0) }
console.log( sum(ranged) )