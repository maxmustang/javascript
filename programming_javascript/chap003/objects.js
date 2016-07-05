// Cause javascript is classless, nad it is possible to create an object on demand at the precise moment
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

// Composition is more like lego blocks. Various pirces aren't desinged to fit with any specific piece.
  // Instead, they are all designed to fit together with any other piece, with few exceptions
