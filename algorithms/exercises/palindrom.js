const str = 'youtu'

function isPalindram(x){
  var lenght = x.length, ns = []
  for(var i =lenght -1; i >= 0 ; i--){
    ns.push(x[i])
  }
  return ns.join('')
}

console.log(isPalindram(str) === str)
