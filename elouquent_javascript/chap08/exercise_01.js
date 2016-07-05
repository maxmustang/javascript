"use strict"

function MultiplicatorUnitFailure(message){ this.message = message  }

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype)


let primitiveMultiply = (num1, num2) => {
    if(Math.random() < 0.5) return num1 * num2
    else throw new MultiplicatorUnitFailure("Erro na hora de dividir")
}

let call = (a, b) => {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
      else 
        console.log(e.message)
    }
  }
}

let caller = call.bind()

console.log(caller(1,2))