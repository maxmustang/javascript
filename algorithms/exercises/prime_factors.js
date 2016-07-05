
function isPrimeFactor(n){
  var divisor = 2, factors = []

  while (n > 2) {
    if(n % divisor == 0){
      factors.push(n)
      n = n / divisor
    }else {
      divisor++
    }
  }
  return factors
}

console.log(isPrimeFactor(15))
