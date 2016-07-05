"use strict"
var array = [['m'], ['a'], ['x']]

var result = array.reduce(function (initial, current) {
    return initial.concat(current)
}, [])


console.log(result.join(','))
