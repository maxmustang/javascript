// from method_invocation, page 31

// method dispatch
// Its a mechanism that determine what to do when an object receives an message.
// Javascript does this by checking if the method exists on the object, or in its prototype chain
// until find it. And then, when it finds it, it will call the method and passes the parameters
// this is also known as `behavior delegation`

// Dynamic Dispatch 
// enables polymorphism by selecting the appropriate method to run based on the paramenter that
// get passed into the method at runtime

const methods = {
    init(args){
        return 'initializing'
    },
    hello(args){
        return `hello ${args}`
    },
    goodbye(args){
        return `goodbye ${args}`
    }
}

const greet = function greet(options){
    console.log('options will be only the method name:', options)
    // using arguments to get the arg when we call the message
    var args = [].slice.call(arguments, 0)
    var actions = 'init' //default action
    
    // verifying if there is an method with the options name
    if(typeof options === 'string' && typeof methods[options] === 'function'){
        actions = options
        args.shift()
    }   
    return methods[actions](args)
}

const t1 = greet()
const t2 = greet('hello', 'world')
const t3 = greet('goodbye', 'world')

console.log('dispatched to default', t1) // will call initializing
console.log('dispatched to hello', t2) // will call hello with world args
console.log('dispatched to goodbye', t3) //will call goodye with world as args