function reverse(sentence) {
  return sentence.split(' ').reverse().join(' ')
}

function x(str){
  var rev = [], wordLen = 0;
  for(var i = str.length - 1; i >= 0; i--){
    if(str[i] == ' ' || i == 0){
      rev.push(str.substr(i , wordLen+1 ));
      wordLen = 0;
    }
    else
      wordLen++;
  }
  return rev.join(' ');
 }

console.log(reverse('que delicia heim'))

console.log(x('que delicia heim'))
