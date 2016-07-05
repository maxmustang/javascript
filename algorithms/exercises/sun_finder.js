function sumFinder(arr, num){
  var len = arr.length - 1
  for(var i = 0; i < len; i++){
    for(var j = 0; j < len; j++){
      let summed = arr[i] + arr[j]
      if( summed == num) {
        console.log(arr[i] ,arr[j],summed)
      }
    }
  }
}

sumFinder([6,4,3,2,1,7], 9);
