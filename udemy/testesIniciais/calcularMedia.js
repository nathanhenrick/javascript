function media() {
    let calc = 0
    for (let i = 0; i < arguments.length; i++) {
        calc += arguments[i]
    }
    let calcMedia = calc / arguments.length
    return calcMedia
}
let total = media(10, 5, 20, 45)
console.log(`A media dos valores é ${total}`)