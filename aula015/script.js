let num = [1, 5, 9, 6, 3, 7]
let esc = 5
let iOf = num.indexOf(esc)
if (iOf != -1) {
    console.log(`A posição do número ${esc} é o ${iOf}`)
} else if (iOf == -1){
    console.log('Ocorreu um ERRO. Por favor, verifique')
}