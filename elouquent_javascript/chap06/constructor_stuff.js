var obj = {
    data: "Hello"
}
function Func1(){
    return obj
}

function Func2(){
    return "ah"
}

var f1 = new Func1();
var f2 = new Func2();
console.log(f1)
console.log(f2)

//if a function created with the constructor invoction patter
// returns a simple type( string, number, undefined and etc )
// the return of the function will be ignored and the 'this' will be settled for a new object

//  if the return is object literal the return will be the object returned 