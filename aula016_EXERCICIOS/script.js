let numero = document.getElementById('in100'); // Campo de inserção numeral
let Lista = document.getElementById('iselec'); // Campo de seleção (opt)
let Res = document.getElementById('res'); // Resultados abaixo de [Finalizar]
let valor = []

function IsNumero () {
    if (Number(n) >=1 && Number(n)) {
        return true
    } else {
        return false
    }
}

function isLista (n, l) {
    if (l.indexOf(Number(n) != -1)){
    return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(numero.value) && inLista(numero.value,valor))
    window.alert.('Okay')
} else {
    alert('Erro')
}
