// the object type refers to a compound value where I can set properties that each hold their own values of any type

var obj = {
  a: 'max',
  b:42,
  c:true
}
//in objects, properties can be accessed by dot notation(obj.property) or bracket notation,use bracket notation for
//keys that have a special character in it, such as obj['hello world'], or in keys that are stored in other value
var obj = {
  a: 'hello',
  b: 23
}
let b = 'hello'
obj[b]//'hello'
obj['b']//23
