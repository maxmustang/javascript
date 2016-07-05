function fnWay(sentence) {
    return sentence.split(' ').reverse().join(' ').split('').reverse().join('')
}

function reverseWords(str){
 var rev = [], wordLen = 0;
 for(var i = str.length-1; i>=0; i--){
   if(str[i]==' ' || i==0){
     rev.push(str.substr(i,wordLen+1));
     wordLen = 0;
   }
   else
     wordLen++;
 }
 return rev.join(' ');
}
console.log(fnWay("max mustang mattos"))
console.log(reverseWords("max mustang mattos"))


console.log(reverseWords2("max mustang mattos"))
console.log(fnWay2("max mustang mattos"))

function fnWay2(params) {
  return params.split(' ').reverse().join(' ').split('').reverse().join('')
}

function reverseWords2(str) { 
  var wordLen = 0;
  var nStr = []

  for(var i = str.length -1 ; i >= 0; i --) {
    if(str[i] == ' ' || i === 0 ) {
      nStr.push(str.substr(i, wordLen + 1))
      wordLen = 0
    }else{
      wordLen ++
    }
  }

  return nStr.join(' ')
}
