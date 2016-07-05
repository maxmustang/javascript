function findFirstNonRepeat(str) {
  var map = {}, length = str.length, char

  for(var i = 0; i < length; i++) {
    char = str[i]
    if(map[char]) {
      map[char] ++
    }else{
      map[char] = 1
    }
  }

  for(i in map){
    if(map[i] === 1){
      return i
    }
  }
}
pharse = 'the quick brown fox jumps then quickly blow air'
console.log(findFirstNonRepeat(pharse))
