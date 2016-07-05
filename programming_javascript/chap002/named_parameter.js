// from method_design 
// page 28
    // the number of variable that I pass into a function is called `arity`
    // Arity should be a small and expressive number of varibles
    // but sometimes, I need to pass a lot of variables to a function as parameter
    // that give me a trouble cause I need to pass it in the right order, even if I dont really need
    // all the parameter to call the function or to create a specific object
    
// sample
var userProto = { 
    name: '',
    email:'',
    alias: '',
    showInSearch: true,
    colorScheme: 'light'
}

function createUser(name ,email,alias,showInSearch, colorScheme) {
    return {
        name: name || userProto.name,
        email: email || userProto.email,
        alias: alias || userProto.alias,
        showInSearch: showInSearch,
        colorScheme: colorScheme || userProto.colorScheme
    }
}

const newUser = createUser( 'max', '', '', true, 'dark')

console.log('newUser color should be dark', newUser.colorScheme === 'dark')
console.log('newUser name should be `max`', newUser.name === 'max')
console.log('new user email should be an empty string', newUser.email === '')

function createUser2(params) {
    return Object.assign({}, userProto, params)
}


const newUser2 = createUser2({name:'Max2', email: 'max@max', colorScheme: 'Black'})

console.log('\nnewUser2 color should be Black', newUser2.colorScheme === 'Black')
console.log('newUser2 name should be `Max2`', newUser2.name === 'Max2')
console.log('newUser2 email should be an max@max', newUser2.email === 'max@max')
console.log('newUser2 alias should be an empty string', newUser2.alias === '')