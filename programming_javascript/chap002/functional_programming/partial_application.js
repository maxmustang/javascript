//page 40
  // wraps a function that takes multiple arguments and returns a function that take fewer arguments
  //sample

  const test = require('tape')

  const multiply = (a,b) => a * b

  const partial = function partial(fn) {
    let args = [].slice.call(arguments, 1)

    return function() {
       // it will concat the number argument, with is defined on its first time call
       // then when it runs, it will combine the called argument
       // with the saved argument before
      let combineArgs = args.concat([].slice.call(arguments))
      return fn.apply(this, combineArgs)
    }
  }

  const double = partial(multiply, 2)
  // at this point, the result of const double is in fact a function
  // that has its 'args' variable defined in the moment that is called as a closure

  test('Patial application', t => {
    // as it was called, the inner args variable will be [2]
    // and `double` functions will receive the `arguments` 4 and will double it
    t.equal(double(4), 8, 'partial() works')
    t.end()
  })

// using .bind in partial application
// the disadvantage is that I wont be able to override the `this` value with .call or .apply
// only with .bind
const boundDouble = multiply.bind(null, 2)// setting the `this` context of multiply with null
test('Partial application with bind', t => {
  t.equal(boundDouble(4), 8, '.bind allow partial application')
  t.end()
})
