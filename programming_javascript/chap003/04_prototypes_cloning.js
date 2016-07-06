//PAGE 56
// Prototype Cloning
//   Sometimes I dont want to share data on a prototype, instead, I wanna that my instances contains all the data
//   from the prototype
const test = require("tape")
let switchProto = {
  isOn() {return this.state},
  toggle() {
    this.state = !this.state
    return this
  },
  state: false,
  meta: { name: 'The Constant'}
}

let s1 = Object.assign({}, switchProto)
let s2 = Object.assign({}, switchProto)

// with object.assign the properties of the prototype will be copied to the child object
// instead of been shared
console.log(s1, '===> ', s2)

test('Prototype clones', t => {
  s1.isOn.isShared = true
  t.false(s2.isShared, 'Methods are copied, not shared between data')
  t.true(s1.toggle().isOn())
  t.false(s2.isOn())

  //objects and array mutations are shared
  s2.meta.name = 'Winds of the winter'
  t.equal('Winds of the winter', s1.meta.name)
  t.equal('Winds of the winter', s2.meta.name)
  //property replacement is instance-specific
  s2.meta = { name: 'Hardhome'}
  t.equal('Hardhome', s2.meta.name)
  t.end()
})
