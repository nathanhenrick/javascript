function tabuada () {
    let Num = document.getElementById('inum')
    let Tab = document.getElementById('iselec')

    if (Num.value.length == 0) {
        alert('[ERRO]. Por favor, verifique!')
    } else {
        let n = Number(Num.value)
        let cont = 1

        Tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `Tab${cont}`

            Tab.appendChild(item)
            cont++
        }
}
}