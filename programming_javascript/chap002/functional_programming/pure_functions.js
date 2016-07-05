//TODO: fazer qlqr merda
//page 36
// Pure functions are STATELESS. It means that they do not USE OR MODIFY variable, objects or arrays that
// are defined outside of the function.
// Given the same input, it will always return the same output

const test = require('tape')
const rotate = arr => {
    arr.push(arr.shift())
    return arr;
}

test('Bad sample as rotate changes the external variable', (t) => {
    let original = [1, 2, 3]
    t.deepEqual(rotate(original), [2, 3, 1], 'rotate() should rotate array elements')
    t.notDeepEqual(original, [1, 2, 3])
    t.end()
})

const safeRotate = arr => {
    let newArray = arr.slice(0) // copies the array to a newVariable
    newArray.push(newArray.shift())
    return newArray
}

test('Pure function ', t => {
    let original = [1, 2, 3]
    t.deepEqual(safeRotate(original), [2, 3, 1], 'safeRotate() should rotate array elements')
    t.deepEqual(original, [1, 2, 3], 'safeRotate() as pure function will not change the external variable')
    t.end()
})

// As i dont have to worry about shared data transformation, stateless functions run in parallel
// is much easier to scale horizontally
