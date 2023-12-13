function load() {
    const date = new Date()
    let horaAtual = date.getHours()

    const msg = document.getElementById('msg')
    const img = document.getElementById('img')

    //Horário da MANHÂ
    msg.innerHTML= `Agora são ${horaAtual} horas.`
    if (horaAtual < 12 && horaAtual > 5) {
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#baa3ac'
        msg.innerHTML += '<p>Bom dia!</p>'
    }

    //Horário da TARDE
    else if (horaAtual >= 12 && horaAtual < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#f9ad4a'
        msg.innerHTML += '<p>Boa tarde!</p>'

    //Horário da NOITE
    } else if (horaAtual >= 18) {
        document.body.style.backgroundColor = '#021217'
        img.src = 'imagens/noite.jpg'
        msg.innerHTML += '<p>Boa noite!</p>'

    //Horário da MADRUGADA
    } else if (horaAtual <= 5 && horaAtual >= 0) {
        img.src = 'imagens/madrugada.jpg'
        document.body.style.backgroundColor = '#34252c'
        msg.innerHTML += '<p>Boa madrugada!</p>'
    }
}