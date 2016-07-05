"use strict"

function Vector(x, y){
    this.x = x
    this.y = y
}

Vector.prototype.plus = function(o){
    return new Vector(this.x + o.x, this.y + o.y);
}

function testVector() { 
    const p1 = new Vector(10,20)
    const p2 = new Vector(-10,5)
    const p3 = p1.plus(p2)
    
    
    if(p1.x !== 10) return "fail: x property";
    if (p1.y !== 20) return "fail: y property";
    if (p2.x !== -10) return "fail: negative x property";
    if (p3.x !== 0) return "fail: x from plus";
    if (p3.y !== 25) return "fail: y from plus";
    return "everything ok";
}

let x = testVector.bind()

console.log(x())