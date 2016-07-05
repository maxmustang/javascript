const test = require('tape')

//TODO: check esse cara

function reverseFP(sentence) {
  return sentence.split(' ').reverse().join(' ').split('').reverse().join('')
}

function reverse(sentence){
  const length = sentence.length
  let wordLen = 0, str = []
  for(var i = 0; i < length; i++){
    if(sentence[i] == ' ' ||  i == 0){
      wordLen = 0
    } else{
      str.push(sentence.substr(wordLen, i - 1))
      wordLen++
    }
  }

  return str.join(' ')
}

test('should reverse everything', t => {
  var str = 'im a good boy'
  t.equal('mi a doog yob', reverseFP(str))
  t.equal('mi a doog yob', reverse(str))
  t.end()
})
