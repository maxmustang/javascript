"use strict"

function Vector(x, y){
    this.x = x
    this.y = y
}

Vector.prototype.plus = function(o){
    return new Vector(this.x + o.x, this.y + o.y)
}

Vector.prototype.minus = function(o){
    return new Vector(this.x - o.x, this.y - o.y)
}

Object.defineProperty(Vector.prototype, 'length',{ 
    get: function(){ 
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
})

console.log(new Vector(1,2).plus(new Vector(3,4)))
console.log(new Vector(3,4).minus(new Vector(1,2)))
console.log(new Vector(1,2).length)