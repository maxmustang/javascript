// from method_design, page 29
// Polymorphism means that something behaves differently based on it's context
// like words that has diffent meaning based on the context
    // Wow my house `is on fire`!
    // Ronaldao `is on fire`in the facebook
    // same sentence, diffent context
    
// Polymorphic functions behave differently based on the params you pass into them.
// in javascript those parameters are store in the array-like object `arguments`

// METHOD DELEGATION
// I can transform an full(or a part) array-like object in a array. 
// To do this, I need to borrow the .slice() method from the Array.prototype using the method delegation

// slice will start from 0 and returns everything from the index as a new array 
const args = Array.prototype.slice.call(arguments, 0) 
// same syntax
const args2 = [].slice.call(arguments, 0)

// I can create a function to sort parameters based in this technique
function sort() {
    //as arguments is not a real array, it doesnt has the sort method
    var args = [].slice.call(arguments, 0)
    // as `args` becomes a real array, since we call slice passing arguments scope
    // it now contians all the array prototype methods
    return args.sort()
}

const result = sort('c', 'b', 'a')
console.log('[`a`,`b`,`c`] => ', result)

// Polymorphic functions frequently need to examine the first argument in order to decide
// how to respond

//sample
function morph(options){
    // args will be a array object
    var args = [].slice.call(arguments, 0)
    var animals = 'turtle' // set as default
    
    if(typeof options === 'string') {
        animals = options
        args.shift() // shift will remove the first object from the array
    }
    
    console.log("-> args", args)
    
    return(`the pet store has ${args} ${animals}`)
}

const t1 = morph('cats', 3)
const t2 = morph('dogs', 2)
const t3 = morph(3)
console.log('\n polymorphic sample')
console.log(t1)
console.log(t2)
console.log(t3)

// with shift
// the pet store has 3 cats
// the pet store has 2 dogs
// the pet store has 3 turtle

//without shift
// the pet store has cats,3 cats
// the pet store has dogs,2 dogs
// the pet store has 3 turtle