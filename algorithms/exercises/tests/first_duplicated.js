console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'))


function firstNonRepeatChar(str) { 
    var aux = {}
    for(var i =0 ; i < str.length; i++) {
        x = str[i] 
        if( aux[x] ){ 
            aux[x] += 1
        }else{
            aux[x] = 1
        }
    }
    for(var x in aux){ 
        if(aux[x] == 1) {
            return x
        }
    }
}