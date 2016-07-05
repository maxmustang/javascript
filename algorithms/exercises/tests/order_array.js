let v = [1,2,3,10,5,6]
const vLength = v.length
for(let i = 0; i < vLength; i ++) {
    for(let j = 0; j < vLength - 1; j++) {
        if(v[j] > v[j + 1] ) {
            aux = v[j + 1]
            v[j + 1] = v[j]
            v[j] = aux
        }
    }
}

console.log(v)