window.addEventListener('scroll', function() {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual > 150) {
        ocultaElementosDoHeader();
    } else {
        exibeElementosDoHeader();
    }
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}