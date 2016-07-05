const test = require('tape')

//TODO: check esse cara
function reverseSentence(sentence) {
  let newSentence = [], wordLen = 0
  for(var i = sentence.length - 1 ; i >= 0; i--){
    // console.log(sentence[i])
    if(sentence[i] == ' ' ||  i == 0){
          newSentence.push(sentence.substr(i + 1, wordLen + 1))
      }
      wordLen = 0
    }else{
      wordLen++
    }
  }
  return newSentence.join(' ')
}

function reverse(sentence) {
  return sentence.split(' ').reverse().join(' ')
}

test('should reverse word', t => {
  const sentence = 'que delicia heim'
  t.equal(reverseSentence(sentence), 'heim delicia que')
  t.equal(reverse(sentence), 'heim delicia que')
  t.end()
})
