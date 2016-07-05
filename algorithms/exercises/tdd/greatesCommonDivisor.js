const test = require('tape')

const findGreatesCommonDivisor = (a,b) => {
  let divisor = 2, greatest = 1
  while(a >= divisor && b >= divisor){
    if(a % divisor == 0 && b % divisor == 0){
      greatest = divisor
    }
    divisor++
  }
  return greatest
}

test("Should find the greatest divisor", t => {
  t.equal(findGreatesCommonDivisor(14, 21), 7 )
  t.equal(findGreatesCommonDivisor(69, 169), 1)
  t.end()
})
