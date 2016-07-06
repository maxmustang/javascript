//PAGE 53
// Prototype
//   Is an object intended to model other objects, its like a classe that is used to instanciate more objects,
// but, it is a object itself. Prototypes can be used by two different ways, by prototype delegate
// That tries to find a property in the `fathers prototype` until Object-Prototype or by cloning this prototype
//
// Delegate Prototypes
//   When I call a method or property in the object, the javascript engine will try get this property on the own object
//   if can't find it, it will try to find in the object-prototype so on, until get to the end of the chain
//   the prototype called Object
//   The first prototype of object will be Object Prototype, I can specify the prototype that will be settled to the object
//   using the Object.create() method

// tests

const test = require('tape')
let switchProto = {
  isOn() {return this.state},
  toggle() {
    this.state = !this.state
    return this
  },
  state: false,
  meta: { name: 'The Constant'},
  array: []
}

let switch1 = Object.create(switchProto), switch2 = Object.create(switchProto)
//with Object.create all the information of the prototype get accessed by prototype delegation
// so, instead the prototype properties stay in the child object, the child object access it throught
// prototype delegation
console.log(switch1, "======> ", switch2) //'empty' objects
test("Object create", t => {
  t.true(switch1.toggle().isOn(), 'it worked')
  t.true(!switch2.isOn())
  t.end()
})
// Sharing state(nonmethod data) on a prototype is a anti-pattern, it causes accidental mutatins of shared properties

// changing a prototype propertie will only affect the object itself
// the problem with meta is that is a reference to another object
// let meta = { name: 'The Constant'}
// .. {
//   meta : meta
// }
// so when I change the meta without override the attribute, it will change the meta object and not the object
// create throught the prototype
// the same can happen to arrays
test('Changing the prototype will afect everyone', t => {
  //changing the array reference will change the array for both prototypes
  t.equal(switch1.array.length, 0)
  switch1.array.push(1)
  t.equal(switch2.array.length, 1)

  //changing the refence will only affect the caller prototype
  switch2.array = [1,2]
  t.equal(switch1.array.length, 1)
  t.equal(switch2.array.length, 2)

  t.equal('The Constant', switch1.meta.name)
  switch2.meta.name = 'Ozymandias'
  t.equal('Ozymandias', switch1.meta.name)
  // if I override the meta object, it will only affect the instance
  switch2.meta = {name:'Battle of the bastards'}
  t.equal('Ozymandias', switch1.meta.name)
  t.equal('Battle of the bastards', switch2.meta.name)
  t.end()
})
