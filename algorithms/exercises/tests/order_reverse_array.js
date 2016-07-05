let v = [1,2,3,10,5,6]
const vLength = v.length
for(var i = vLength; i >=0; i--){ 
    for(var j = vLength - 1; j >=0; j--) {
        if(v[j - 1] < v[j]) {
            aux = v[j - 1]
            v[j - 1] = v[j]
            v[j] = aux
        }
    }
}
console.log(v)