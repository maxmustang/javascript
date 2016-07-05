console.log(merge([2,1,4,3], [2,5,6]))


function merge(a,b){ 
    var array = []

    for(var i = 0; i < a.length; i++){
        array.push(a[i])
    }

    for(var i = 0; i < b.length; i++){
        array.push(b[i])
    }

    for(var i = 0; i < array.length; i++){
        for(var l = 0; l < array.length -1; l++){
            if(array[l] > array[l + 1]){
                var aux = array[l + 1]
                array[l + 1] = array[l]
                array[l] = aux
            }
        }
    }
    return array;
}
