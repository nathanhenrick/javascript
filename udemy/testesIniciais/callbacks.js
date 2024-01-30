// const saudar = (nome) => {
//     const horaAtual = new Date().getHours()

//     const responder = (saudacao) => console.log(`${saudacao}, ${nome}!`)

//     if(horaAtual <= 12) return responder('Bom dia')
//     if(horaAtual <= 18) return responder('Boa tarde')
//     return responder('Boa noite')
// }

// saudar(`Nathan`)

const saudar = (nome, cb) => {
    const horaAtual = new Date().getHours()

    if(horaAtual <= 12) return cb('Bom dia', nome)
    if(horaAtual <= 18) return cb('Bom tarde', nome)
    return cb('Boa noite', nome)
}

const responderCallBack = (saudacao, nome) => console.log(saudacao, nome) //Esta linha vai pra dentro do Callback junto do nome. Os IF'S dentro da função irão mudar o responder()
saudar ('Nathan', responderCallBack) //Argumento na const saudar()