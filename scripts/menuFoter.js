
// funcao reponsavel pelo menu mobile
function menuMob() {
    let abri = document.querySelector('.fa-bars'); // Botão que abre o menu
    let menu = document.querySelector('.menuMob'); // Div do menu mobile
    let fecha = document.querySelector('.fa-xmark'); // Botão que fecha o menu
    let overlay = document.querySelector('#overlay'); // Overlay que escurece o conteúdo

    // abri menu
    abri.addEventListener('click', () => {
        menu.classList.add('abrirMenu');
    });

    // fechar o menu (remove a classe que aumenta o width)
    fecha.addEventListener('click', () => {
        menu.classList.remove('abrirMenu');
    });

    // Fecha o menu ao clicar no overlay (fora do menu)
    overlay.addEventListener('click', () => {
        menu.classList.remove('abrirMenu');
    });
}


menuMob()