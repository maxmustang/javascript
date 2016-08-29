//there are two main types of value comparsion in javascript
// equality and inequality, the result of any comparsion is a strictly boolean value(true or false)

//Coercion comes in two forms in JS: explicit and implicit

var a = '42'

var b = Number(a)
a //'42'
b //42

//Implicit Coercion

var a = '42'
var b = a * 1
a //'42'
b //42
// the specific list of 'falsy' values in JS
""
0, -0, NaN
null, undefined
false

//any value that is not 'falsy' is 'truthy'
'hello'
42
true
[],[1,2,3]
{},{a:1}
function x(){}
