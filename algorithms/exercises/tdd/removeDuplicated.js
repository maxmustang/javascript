const test = require('tape')

Array.prototype.removeDuplicationsWithFP = function(){
  let aux = []
  let newArray =  this.filter(x => {
    if( aux.indexOf(x) === -1){
      aux.push(x)
      return x
    }
  })
  return newArray
}

Array.prototype.removeDuplications  = function() {
  let newArray = []
  for(var i = 0; i < this.length; i++){
    var p = this[i]
    if(newArray.indexOf(p) === -1)
      newArray.push(p)
  }
  return newArray;
}

test('Should remove all duplicateds', t => {
  const arrayWithDuplications = [1,2,2,3,4,4]
  t.deepEqual(arrayWithDuplications.removeDuplicationsWithFP(), [1,2,3,4] )
  t.deepEqual(arrayWithDuplications.removeDuplications(), [1,2,3,4])
  t.end()
})
