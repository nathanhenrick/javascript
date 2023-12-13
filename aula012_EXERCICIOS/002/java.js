function verificar() {
    const newDate = new Date()
    const anoAtual = newDate.getFullYear()
    const fano = document.getElementById('txtano') //Input nascimento
    const res = document.getElementById('res') //Resultado

    if (fano.value.length == 0 || fano.value > anoAtual) {
        alert('[OCORREU UM ERRO] Por favor, verifique!')
    } else {
        //Variáveis aqui:
        const fsex = document.getElementsByName('radsex')
        const idade = anoAtual - Number(fano.value)
        let genero = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'imagem')

        //Condições aqui:
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menino.jpg') //Criança

            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/adolescente-h.jpg') //Adolescente

            }else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem.jpg') //Adulto

            } else {
                img.setAttribute('src', 'imagens/idoso.jpg') //Idoso

            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menina.jpg') //Criança

            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/adolescente-m.jpg') //Adolescente

            }else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher.jpg') //Adulto

            } else {
                img.setAttribute('src', 'imagens/idosa.jpg') //Idoso

            }
        }
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }



}