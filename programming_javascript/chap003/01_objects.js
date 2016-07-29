// Cause javascript is classless, and it is possible to create an object on demand at the precise moment
// it's needed(lazy initialization), the singleton is reduced to an object literal
//js object
  var highlander = {
    name: 'x',
    catchparase: 'there can be only one'
  }
  //javascript is not a classical OO language. It's a prototypal language.

// Classical Inheritance is Obsolete
  // Program to an interface, not an implementation
  // favor composition over Inheritance

  //Inheritance exposes the parent class to all child classes. The child classes are all programming to an
  // implementation, not an interface

// Composition is more like lego blocks. Various pieces aren't desinged to fit with any specific piece.
  // Instead, they are all designed to fit together with any other piece, with few exceptions

// PAGE 51
// Fluent-Style Javascript:
//   forgetting to use the `new` keyword in Javascript for the constructor invocation pattern will pass the global object
//   in the function to `this`. With the strict-mode on, if I forget the `new`, the `this` will became useless, and
//   when it try to assign variable, will thrown an error
//
// Dynamic Object Extensions
//   I can add propeties to ANY object in Javascript after the instantiation
//
// Prototypal Inheritance
