const getCommonDivisor = (a,b) => {
    let commonDivisor = []
    var i = 2;
    while(a >= i && b >= i){ 
        if(a % i === 0 && b % i ===0) {
            commonDivisor.push(i)
        }
        i++
    }

    return commonDivisor
}

console.log(getCommonDivisor(10, 30))



const getBiggestCommonDivisor = (a,b) => {
    let commonDivisor = 0
    var i = 2;
    while(a >= i && b >= i){ 
        if(a % i === 0 && b % i ===0) {
            commonDivisor = i
        }
        i++
    }

    return commonDivisor
}

console.log(getBiggestCommonDivisor(10, 30))