// The firts principle of OO design, Program to an interface, not an implementation
// encapsulation allows me to enforce this principle, hiding the implementation details from the user
// a factory is a method used to create other objects, its purpose is to abstract the details of object creation from
// object use

function factory() {
  let highlander = {
    name: 'Max'
  }
  return{
    get:() => highlander
  }
}

const test = require('tape')
test('singleton', t => {
  const singleton = factory()
  const h1 = singleton.get()
  const h2 = singleton.get()

  h1.sword = 'katana'
  console.log(h1, '===> ', h2)
  t.ok(h2.sword)
  t.end()
})
//adding the parking brake to the car

const car = function car(color, direction, mph) {
  var isParkingBrakeOn = false;
  return {
    color: 'dark',
    direction: 0,
    mph:0,
    gas(amount){
      amount = amount || 10
      this.mph += amount
      return this
    },
    brake(amount){
      amount = amount || 10
      this.mph = ((this.mph - amount) < 0) ? 0 : this.mph - amount
      return this
    },
    toggleParkingBrake(){
      isParkingBrakeOn = !isParkingBrakeOn
      return this;
    },
    isParked(){
      return isParkingBrakeOn
    }
  }
}
//adding encapsulation thought closures
const myCar = car('a', 0, 5)
const c2 = car()
test('Factory with private variable', t => {
  t.ok(myCar.color, 'has a color')
  c2.color = 'max'
  t.notEqual(myCar.color, 'max')
  t.equal(myCar.gas().mph, 10, '.accelerate() should add 10')
  t.equal(myCar.brake(5).mph, 5, '.brak(5) should subtract 5')
  t.true(myCar.toggleParkingBrake().isParked(), '.toggleParkingBrake works') //encapsulation
  t.end()
})

// using the prototypes
const carPrototype = {
  gas(amount){
    amount = amount || 10
    this.mph += amount
    return this
  },
  brake(amount){
    amount = amount || 10
    this.mph = ((this.mph - amount) < 0) ? 0 : this.mph - amount
    return this
  },
  color: 'dark',
  direction: 0,
  mph:0
}


// here we have the same issue of reference, if we have an { xpto: { name: 'a'}}
// to replace it in the prototype child we need to replace all the reference
// child.xpto.name = 'max' will reflect in all prototypes
// child.xpto = { name: 'max2' } will just reflect on the prototype caller, child in this case

//Singleton
//mixing assign with create
// create a Object point to carPrototype as prototype and copyng all the value from `options` to the object itself

//TODO: Implement data privacy with factory
const carPrototypeFactory = options => Object.assign(Object.create(carPrototype), options)

const newCar = carPrototypeFactory({color: 'blue'})
const newCar2 = carPrototypeFactory({color: 'red'})
test('Flyweight factory with cloning', t => {
  console.log(newCar, '---> ', Object.getPrototypeOf(newCar))
  console.log(newCar2, '---> ', Object.getPrototypeOf(newCar))
  t.true(Object.getPrototypeOf(newCar).gas, 'has method')
  // avoid sharing objects and arrays on the prototype. I can create new copies of the child object/array in the factory
  t.end()
})
