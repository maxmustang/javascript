"use strict"

let size = 10

function count(size) {
    if(size === 0 ) return
    
    console.log(size)
    count( size - 1 )
}
// count(size)

let x = [
    { id: 'animal', 'parent': null},
    { id: 'mamal', 'parent': "animal"},
    { id: 'dog', 'parent': "mamal"},
    { id: 'malu', 'parent': "dog"},
    { id: 'pacheco', 'parent': "dog"},
    { id: 'cat', 'parent': "mamal"},
    { id: 'rodolfo', 'parent': "cat"},
    { id: 'tina', 'parent': "cat"},
]


let makeTree = (list, parent) => {
    let node = {}    
    
    let recursion = (c) => { node[c.id] = makeTree(list, c.parent) }
    
    list
        .filter( t => t.parent === parent)
        .forEach( c => node[c.id] = 
            makeTree(list, c.id) 
        )
    
    return node
}
console.log(makeTree(x, null))