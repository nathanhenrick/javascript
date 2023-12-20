function contar() {
    let Ini = document.getElementById('iinicio');
    let Fim = document.getElementById('ifim');
    let Passo = document.getElementById('ipasso');
    let Res = document.getElementById('res');

    if (Ini.value.length == 0 || Passo.value.length == 0 || Fim.value.length == 0) {
        alert('[OCORREU UM ERRO]. Por favor, verifique)');
    } else {
        Res.innerHTML = '<p>[Contando]</p>';
        let i = Number(Ini.value);
        let f = Number(Fim.value);
        let p = Number(Passo.value);

        if (i < f) {
            // Contagem CRESCENTE
            for (let c = i; c <= f; c += p) {
                Res.innerHTML += `${c} → `;
            }
        } else {
            // Contagem DECRESCENTE
            for (let c = i; c >= f; c -= p) {
                Res.innerHTML += `${c} → `;
            }
        }

        Res.innerHTML += 'FIM';
    }
}
