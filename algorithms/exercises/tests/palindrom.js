const isPalindron = str => { 
    const strLength = str.length
    let pal = []
    for(let i = strLength - 1; i >=0; i --){
        pal.push(str[i])
    }

    return pal.join('')
}

console.log(isPalindron('bac'))