
(function () {
    const elemento = document.querySelector(".top-bar p");
    const nomeUsuario = 'Nathan';

    if (nomeUsuario) {
        elemento.innerHTML += nomeUsuario;
    } else {
        elemento.parentElement.style.display = 'none';
    }
})();


//Tentar fazer o código do professor sem olhar