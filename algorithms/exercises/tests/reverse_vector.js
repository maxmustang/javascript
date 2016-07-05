let v = [1,2,3,10,5,6]
const vLength = v.length
// reverse array with aux array
let nVet = []
for(var i = vLength - 1; i >=0; i --) { 
    nVet.push(v[i])
}
console.log(nVet)