function sum() {
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

let total = sum('a', 'b', 'c')
console.log (total)