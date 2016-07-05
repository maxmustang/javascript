const test = require('tape')
//a number is prime if its only divisible for 1 and itself
const isPrime = number => {
  let divisor = 2
  while(number > divisor){ // while the argument is bigger than the iterator
    console.log(divisor, number, number % divisor)
    if(number % divisor == 0) return false
    divisor++
  }

  return true
}

test("Verify if is a prime number", t => {
  t.false(isPrime(8))
  t.true(isPrime(13))
  t.end()
})
