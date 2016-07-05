// previouly in hoisting

// functions expressions do not share the hosting behavior
// cause it declares a variable, and its subjected to variable behavior
// and not functions behavior


//TIP:
  //always declare variables at the top of the function
  // and declare function before use it

function init() {
  function number() { return 1}

  // iffe
  (function() {
    try{
      number()
    }catch(e){
      console.log('number is undefined cause its a variable and not a function! e.message: ', e.message)
    }

    let number = () => 2 //its variable, not a function itselfe
  }())

  console.log('in outer scope of init() and as number is a function here, it will return 5', number())
}
init()

// it is equivalent to

function init2() {
  function number() { return 5 }
  (() => {
    let number // number is declared as undefined
    try{
      number()
    }catch(e){
      console.log('number is undefined, cause of the Hoisting  e.messag:', e.message)
    }
    number = () => 2
  })()
  console.log('number as its a function in outer scope, it will return 5', number())
}
init2()
