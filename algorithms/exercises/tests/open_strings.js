
function isClosedInnerString(str) { 
    let basket = 0;

    for(var i = 0; i < str.length; i++) {
        if(str[i] === "{") basket += 1
        else if(str[i] === "}") basket -= 1

        if(basket < 0) break;
    }
    
    return basket === 0
}

console.log(isClosedInnerString("{}"))
console.log(isClosedInnerString("{}{}"))
console.log(isClosedInnerString("{{{}}}"))
console.log(isClosedInnerString("{}{}{"))
console.log(isClosedInnerString("{}}}"))
console.log(isClosedInnerString("}{}}"))
console.log(isClosedInnerString("}{}"))