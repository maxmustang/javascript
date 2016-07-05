const test = require('tape')

function isNested(str) {
  const l = str.length
  let p = 0
  for(let i = 0; i < l; i++) {
    if(str[i] === '{') p += 1
    if(str[i] === '}') p -= 1

    if( p < 0) break
  }
  return p  == 0 ? true : false
}

test('should test nested strings', t => {
  t.true(isNested('{}'))
  t.true(isNested('{{}}'))
  t.true(isNested('{}{}'))
  t.false(isNested('{}}{'))
  t.false(isNested('}{{}'))
  t.true(isNested('{{{}}}'))
  t.end()
})
