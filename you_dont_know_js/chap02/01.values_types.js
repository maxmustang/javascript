// // javascript has typed values, not typed variables
// string
// number
// boolean
// null and undefinedobject
// symbol(ES6)


// typeof is a operator that can examine a value and tell you what type is
// typeof dont check the 'type of a' but the 'type of the value current in a'
// typeof null errantly retunrs object, seems to be a bug, it should return null
var a
typeof a //undefined

a = 'max'
typeof a //string

a = 23
typeof a //number

a =  true
typeof a //boolean

a = null
typeof a //object --weird

a = undefined
typeof a //undefined

a = {c:1}
typeof a //object
