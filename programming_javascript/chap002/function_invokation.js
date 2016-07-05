//Function invokation

function highPass(number, cutoff){
  cutoff = cutoff || this.cutoff
  return (number >= cutoff)
}

//object receiving an function as method call
let filter1 = { highPass: highPass, cutoff:5 }

// no method to object
let filter2 = {cutoff:3}

//if the optional parameter cutoff its not suplied, the function assumes that
// its been called as a method of a valid filter(1/2) obj
//simple function invocation

const result = highPass(6,5)
console.log(result === true)
