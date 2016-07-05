const test = require('tape')

const isPrime = number => {
  let divisor = 2
  while(number > divisor){ // while the argument is bigger than the iterator
    if(number % divisor == 0) return false
    divisor++
  }

  return true
}

const findAllPrimeNumber = number => {
  let response = []
  let divisor = 2

  while (number >divisor) {
    if(number % divisor == 0 && isPrime(divisor)) {
      response.push(divisor)
    }

    divisor++
  }
  return response
}

test('Should find all prime factors of a number', t => {
  t.deepEqual([3, 5], findAllPrimeNumber(15))
  t.deepEqual([3, 23], findAllPrimeNumber(69))
  t.deepEqual([2, 3, 7], findAllPrimeNumber(42))
  t.end()
})
