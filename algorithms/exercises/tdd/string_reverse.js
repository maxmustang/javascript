const test = require('tape')

String.prototype.reverseFP = function(){
  return this.split('').reverse().join('')
}

String.prototype.reverse = function(){
  const length = this.length
  let string = ''
  for(var i = length - 1; i >= 0; i--){
    string += this[i]
  }
  return string
}

String.prototype.reverseWithArray = function(){
  const length = this.length
  let newString = []
  for(var i = length - 1; i >= 0; i--){
    newString.push(this[i])
  }
  return newString.join('')
}

test('should reverse string', t => {
  t.equal('abc def'.reverse(), 'fed cba' )
  t.equal('abc def'.reverseWithArray(), 'fed cba' )
  t.equal('abc'.reverseFP(), 'cba')
  t.end()
})
