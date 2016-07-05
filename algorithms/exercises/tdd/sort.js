var array = [10,2,5,7,8]
var arraySize = array.length

for(var i = 0; i < arraySize ; i++ ) {
    for(var j =0; j < arraySize - 1; j++) {
        if(array[j] > array[j + 1]){
            aux = array[j + 1]
            array[j + 1] = array[j]
            array[j] =  aux
        }
    }
}

console.log(array)

Array.prototype.last = function () { 
    var newArray = [].slice.call(this) 
    var arraySize = newArray.length
    for(var i = 0; i < arraySize ; i++ ) {
        for(var j =0; j < arraySize - 1; j++) {
            if(newArray[j] > newArray[j + 1]){
                aux = newArray[j + 1]
                newArray[j + 1] = newArray[j]
                newArray[j] =  aux
            }
        }
    }
    return newArray
};
console.log([10,2,5,7,8].last())
