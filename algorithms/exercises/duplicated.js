function remove() {
  var a = [].slice.call(arguments, 0)
  var array = []
  var aux = {}
  var elm
  for(var i of a) {
    elm = i
    if(!aux[elm]){
      aux[elm] = true
      array.push(i)
    }
  }

  return array
}

console.log(remove(1,1,1,2,3,4,4,5))
