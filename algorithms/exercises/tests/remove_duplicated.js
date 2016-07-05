function removeDuplicated(list) { 
    var aux = {}
    var newList = []
    for(var i = 0; i < list.length; i++) { 
        if( ! aux[list[i]]) {
            newList.push(list[i])
            aux[list[i]] = 1
        }
    }
    return newList
}

console.log(removeDuplicated([ "max", "mattos", "max", "mustang"]))