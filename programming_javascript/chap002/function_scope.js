// all the variables declared inside a function scope are unavaliable outside
// the var key word is not block scoped

var x = 1
console.log('outside scope: ', x)
function t() {
    //it will echo undefined, Only in nodejs enviroment
    //On a browser it will echo `1`
    console.log('inside a function scope: ', this.x)
    var x = 10
    console.log('variable x declared in the function scope:', x)
}
t()
console.log('again x outside a function scope', x)

//Hoisting
//it continues in the hoisting.js file
