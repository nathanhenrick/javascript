
(function () {
    const elemento = document.querySelector(".top-bar p");
    const nomeUsuario = '';

    if (nomeUsuario) {
        elemento.innerHTML += nomeUsuario;
    } else {
        elemento.parentElement.style.display = 'none';
    }
})();
