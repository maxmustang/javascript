function greatestCommonDivisor(a, b){
  if(b == 0)
     return a;
   else
     return greatestCommonDivisor(b, a % b);
}

// pega o ultimo numero e o resto da divisao de um por outro
// 14,21
// 21,14
// 14,7
// 7,0
// 7
console.log(greatestCommonDivisor(14,21))
