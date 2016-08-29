//functions
function foo() {
  return 23
}

foo.bar = 'hello world'
typeof foo //function
typeof foo() //number
typeof foo.bar //string

//functions are subtypes of object, wich implies that a function is a main type, and can have properties
// but I will only use functions properties in limited cases
