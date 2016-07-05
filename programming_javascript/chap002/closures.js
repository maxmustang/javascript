// closures stores a function state, even after the function has returned.
// To create a closure I just need to create a inner function inside of a function
// and expose it(return it) when the app call the outer function
// it gives the object, data privacy

const o = function o (datax = 1) {
  let data = datax;
  let get = () => data
  return { get: get }
}

// `o`  is a object factory that provides access to the outer function scope

let obj1 = o(10)
let obj2 = o()
let obj3 = o(20)
console.log("obj get access to data: ", obj1.get())
console.log("obj get access to data: ", obj2.get())
console.log("obj get access to data: ", obj3.get())
