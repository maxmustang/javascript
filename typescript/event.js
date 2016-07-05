var EventEmitter = require('events');
var util = require('util');
function MyEmitter() {
  EventEmitter.call(this);
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();

myEmitter.on('test-123', function() {  console.log('ha!') })

myEmiiter.emit('test-123')
