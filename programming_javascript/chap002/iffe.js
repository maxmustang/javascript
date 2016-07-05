//self-invoked function expression
// its when immediatly invoke a function as soon as its defined, but its not  good name
// iffe by the other hand, perfectly matchs the concept
// immediatly invoked function expression
  // iffe lets you encapsulate scope, so we can asing regular variable instead of prototypes function
var y =   (
    function () {
      var isOn = false,
      toggle = function toggle() { isOn = !isOn; return isOn; },
      getState = function getState() {  },// Implementation...
      off = function off() { }, // Implementation...
      on = function on() { console.log("on") },
      blink = function blink() {  }, // Implementation...

      lightbulb = {
        toggle: toggle,
        getState: getState,
        off: off,
        on: on,
        blink: blink
    };
    return lightbulb
  }()
);

console.log(y.on())
