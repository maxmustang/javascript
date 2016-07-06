// Object Creation
  // creation with constructor functions
  function Car(color , direction, mph){
    this.isParkingBrakeOn = false //encapsulation
    this.color = color || 'black'
    this.direction = direction || 0
    this.mph = mph || 0

    this.gas = (amount) => {
      amount = amount || 10
      this.mph += amount
      return this;
    }

    this.brake = (amount) => {
      amount = amount || 10
      this.mph = ((this.mph - amount) < 0) ? 0 : this.mph - amount
      return this
    }

    this.toggleParkingBrake = () => { this.isParkingBrakeOn = !this.isParkingBrakeOn; return this; }
    this.isParked = () => this.isParkingBrakeOn
  }
  const myCar = new Car()
  const test = require('tape')

  test('Constructor', t => {
    t.ok(myCar.color, 'has a color')
    t.equal(myCar.gas().mph, 10, '.accelerate() should add 10')
    t.equal(myCar.brake(5).mph, 5, '.brak(5) should subtract 5')
    t.true(myCar.toggleParkingBrake().isParked(), '.toggleParkingBrake works') //encapsulation
    t.end()
  })

  // saving syntax with Object-literal
  // in Object-literal we do not have encapsulation
  const carPrototype = {
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
    }
  }

  test('object literal notation', t => {
    t.true(carPrototype.color, 'has a color')
    t.equal(carPrototype.gas().mph, 10, '.accelerate() should work')
    t.equal(carPrototype.brake(5).mph, 5, '.brake() should work')
    t.end()
  })
