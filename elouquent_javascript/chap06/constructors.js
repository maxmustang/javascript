"use strict"
// in javascript, calling a function with 'new' in front of functions name
// causes the function to be treated as a construtor

// obs javascript construtor function must be capitalized

function Rabbit(type) { 
    this.type = type
}

var killerRabbit = new Rabbit("killer")
var blackRabbit = new Rabbit('black')

// all functions by default receive a property named prototype, wich by default is a plain old object that derives from
// Object.prototype
// every instance created with this construtor will have the same object as prototype


Rabbit.prototype.speak = function(){
    console.log('Im a ', this.type, ' rabbit, bitch!')
}

blackRabbit.speak()

// the prototype will not affect the instance property if defined as well
Rabbit.prototype.teeh = "ha!"

killerRabbit.teeh = "hauhauhuha"

// console.log(killerRabbit.peteca())

// Object.create() allow us to create a object with a specific prototype
// and we can create a object with no prototype at all Object.create(null)
// this way, we do not allow that ower new object contains methods like toString.. that it inherits from Object.prototype

// getters and setters

var pile = {
    elements: [1,2,3],
    get height() {
        return this.elements.length
    },
    
    set height(v){
        console.log("ignoring the value", v)
    }
}


console.log(pile.height)
pile.height = "huasd"

function Test(){}


//defining getters in runtime
Object.defineProperty(Test.prototype, 'teste', {get: function() { return 'ha'; }})
