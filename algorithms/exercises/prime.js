// finds if a number is prime based if its divisible by 1 and itself
function prime(n){
  var divisor = 2
  while (n > divisor) {
    console.log(n, divisor, n % divisor)
    if(n % divisor == 0) return false
    else  divisor++
  }
  return true
}
console.log(prime(5))
console.log(prime(15))
