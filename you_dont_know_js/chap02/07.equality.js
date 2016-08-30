//there are four equality operators in js
// == === != !==
//the difference between == and === is that
// == checks for value equality
// === checks for value equality and type equality
// but the rigth way to say it, is that == checks for value equality with coercion allowed,
// and === checks for value equality without allowing coercion

var a = 42;
var b = '42'

a == b // true cause of the allowing coercion
a === b //false

//if either value(aka side) in a comparsion could be the boolean TRUE or FALSE, avoid == and use ===
// if either value in a comparsion could be of these specific values(0, "",[]), avoid == and use ===
//in all other cases, Im safe to use ==


//I should take a special care if Im comparing two non-primitive values(like objects, arrays and etc)
//cause those values are held by reference, so the comparsion will check if the reference matchs and not the value itself

//arrays by default coerced to strings by simple joining all the values with comma(,)
var a = [1,2,3]
var b = [1,2,3]
var c = '1,2,3'

a==c //true
b==c //true
a==b //false

//inequality
// in javascript, string values can also be compared for inequality, using typical alphabetic rules
// Coersion stills working similar as rules of ==

var a = 41
var b = '42'
var c = '43'

a < b // true
b < c //true
//If one of the part of inequality isnt a string, then both are coerced to be a Number
// if both were strings Coersion is made alphabetically

var a = 42
var b = 'foo'
a < b //false
a > b //false
a == b // false

// B is been coerced to the NaN in the < and > comparsions, and NaN is NOT greater or smaller than any Number
