let agora = new Date()
let diaSem = agora.getDay()

switch (diaSem) {
    case 0:
        console.log('O dia da semana de hoje é: Domingo')
        break
    case 1:
        console.log('O dia da semana de hoje é: Segunda')
        break
    case 2:
        console.log('O dia da semana de hoje é: Terça')
        break
    case 3:
        console.log('O dia da semana de hoje é: Quarta')
        break
    case 4:
        console.log('O dia da semana de hoje é: Quinta')
        break
    case 5:
        console.log('O dia da semana de hoje é: Sexta')
        break
    case 6:
        console.log('O dia da semana de hoje é: Sábado')
        break
    default:
        console.log('Ocorreu um erro')
}