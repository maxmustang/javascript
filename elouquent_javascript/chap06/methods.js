"use strict"
//methods are simple properties that holds a function value

var rabbit = { 
   speak: (line) => {console.log('the rabbit says> ' + line)}
}

function speak(line) { 
    console.log("The " + this.type + " says: " + line)
}

var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

// whiteRabbit.speak("brinca")
// fatRabbit.speak("brinca!!!")


// call the function passing a 'this' as first argument and then a array of argunts
speak.apply(whiteRabbit, ['heloo'])
// call the function passing a this as first argument and then, each method argument 
speak.call(fatRabbit, "chupa")
// add to the var L scope the value from speak witch fatRabbit as a this and a array of argument
var l = speak.bind(fatRabbit, ['bind'])
//then when it called, it will remenber from the this and the arguments
l()