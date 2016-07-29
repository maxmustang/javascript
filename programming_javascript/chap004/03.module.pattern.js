// page 77
//   Module Pattern
//     Modules in the browser use a wrapping function to encapsulate private data in a closure(IIFE)
//     The original module pattern assings the result of the IIFE to a predefined namespace variable:

  const tape = require('tape')
  const myModule = (function(){
    return {
      hello: function hello() {
        return 'Hello'
      }
    }
  }());
  //
  tape('module pattern', t => {
    t.equal('Hello', myModule.hello(), 'Module Works')
    t.end()
  });
//
// The problem with this pattern is that I have no choice but to expose at least one global variable for each module
// Instead, its possible to pass in an existing variable to extend with your new module.

const app = {};
(function(exports) {
      (function(exports){
        var api = { moduleExists: function() { return true } };
        Object.assign(exports, api)
      }((typeof exports === 'undefined') ? window : exports))
}(app));

tape('pass app as export', t => {
  t.ok(app.moduleExists(), 'module exists')
  t.end()
})
