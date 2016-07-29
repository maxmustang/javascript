// //page 71
//
// What modules are ?
//   Modules are reusable software components that form the building blocks of applications. Modularity satisfies
//   some very important design goals, design part of a system to a modular interface contract instead of a implementation,
//   reusable code, modules are encapsulated, it means that they keep the implementation details private and exposes
//   a public API.
//
// Principles of Modularity
//   Modules are independent applications that are fully functional and fully testable, keeping them as small and simples
//   as possible, to do the job that they were desinged to.
//
// Modules should be:
//   Specialized: each module should have a very specific function, and the public API should be clean and simples
//   Independent: modules should know as little as possible about other modules, a module should use other module by a
//     mediator, between the caller and the module that is executable
//   Decomposable: It should be simple to test and uses module isolation from other modules
//
// The Open Closed Principle:
//   A module interface should be open to extension but closed to modification. I should avoid changing an existing
//   interface once it has been established, but it should be easy to extend existing interfaces with new functionality
