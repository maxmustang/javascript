// continuation from the method_invocation.js
function highPass(number, cutoff) {
  cutoff = cutoff || this.cutoff;
  return (number >= cutoff);
}
var filter1 = { highPass: highPass, cutoff: 5},
    filter2 = {cutoff: 3 }; // No highPass here!

var result1 = filter1.highPass(3) 
// as it do not have an highpass function, I will call it with call or apply
var result2 = highPass.call(filter2, 3) 

//.call and .apply dont set the context permanently to the function
// every time that we need to call .call or .apply
// we'll need to set the same context again
  // var result4 = highPass.call(filter2, 4)
  // var result5 = highPass.call(filter2, 5)
  // var result6 = highPass.apply(filter2, [6])


// the .bind method is used to PERMANENTLY set the value of this
// inside of the target function, passing the object context

// I'm saying that, my `x` function will have the internal `this`
// as defined in filter2
// so, it's cutoff will always be as defined in the referenced `this`, and I can call it as many times that I want
// and will always be the same internal `this` for the filter2
var x = highPass.bind(filter2)
console.log('the `x` does not contain a cutoff property, it only contains the highpass function execution', x.cutoff)
console.log("bindedResult1 of highpass with 3: " + x(3))
console.log("bindedResult2: of highpass with 4" + x(4))
console.log("bindedResult3: of highpass with 1" + x(1))

// then if I change the cutoff from filter2, my binded highpass in `x` will change as well
console.log('Filter2.cutoff: ' + filter2.cutoff, 'changing to 10')
filter2.cutoff = 10
console.log('new filter2 cutoff: ' + filter2.cutoff)
console.log("filter2 calling highPass with 0: ", highPass.call(filter2, 3))
console.log("Binded `x` calling itself with 3: ", x(3))
