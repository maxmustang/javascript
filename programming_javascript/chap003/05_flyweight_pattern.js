// conserves system memory by storing all reusable propeties and methods on the delegate object, as opposed to storing
// copies of then on every instance

const enemyPrototype = {
  name: 'Wolf',
  position: { x:0, y:0 },
  setPosition(x,y) {
    this.position = { x,y }
    return this
  },
  health: 20,
  bite(){},
  evade(){}
}

const spawnEnemy = () => Object.create(enemyPrototype)
const test = require('tape')

test('Flyweight pattern', t => {
  let w1 = spawnEnemy()
  let w2 = spawnEnemy()
  w1.health = 5
  t.ok(w2.health = 2, 'Primitive override')
  t.equal(w1.setPosition(10,10).position.x , 10,  'Object override works')
  t.equal(w2.position.x, 0, 'The prototype remains the same')
  console.log(w1,'====' ,w2)
  t.end()
})
