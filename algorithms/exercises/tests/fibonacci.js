function fib(n) { 
    let l = [0, 1]

    if(l <= 2) return l;

    for(var i = 2; i <= n; i++) { 
        l[i] = l[i - 1] + l[i - 2]
    }

    return l[n]
}
console.time('a')
console.log(fib(12))
console.timeEnd('a')

function fib_recursion(n){
    if(n <= 1) return n
    else return fib_recursion(n - 1 ) + fib_recursion(n - 2 )
}

console.time('a')
console.log(fib_recursion(12))
console.timeEnd('a')