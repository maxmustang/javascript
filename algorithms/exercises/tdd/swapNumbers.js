const test = require('tape')

function swapNumber(a,b){
  b = b - a //1 5
  a = a + b // 2 10
  b = a - b // 2 5
  return [a,b]
}

test('should swap numbers without aux', t => {
  t.deepEqual([2,1], swapNumber(1,2))

  t.deepEqual([10,5], swapNumber(5,10))
  t.end()
})
