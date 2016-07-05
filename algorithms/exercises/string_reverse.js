function reverse(word){
  console.time("t")
  const len = word.length
  var aux = ''
  for(var i = len -1; i >=0; i--){
      aux += word[i]
  }
  console.timeEnd('t')
  return aux
}

function reverse_better(word) {
  console.time('t')
  var ns = []
  const wordLength = word.length

  for(var i = wordLength - 1; i >= 0; i--) {
    ns.push(word[i])
  }
  const f = ns.join('')
  console.timeEnd('t')

  return f
}

String.prototype.reverse_better = function(){
  console.time('t')
  const x = this.split('').reverse().join('')
  console.timeEnd('t')
  return x
}
console.log(reverse('max'))
console.log(reverse_better('max'))
console.log('max'.reverse_better())
