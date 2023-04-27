// --> Menu <-- //

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', 'true')
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
// --> Fim do Menu <-- //

// --> Nome <-- //

function typeWrite(elemento) {
    const texto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    texto.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 250 * i);
    });
}

const nome = document.querySelector('#text');
typeWrite(nome); 
// --> Fim do Nome <-- //

// --> Scroll --> //
const menuItens = document.querySelectorAll('#menu .link-nav');
menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const section = getScrollTopByHref(event.target) - 30;

    scrollToPosition(section);
}

function scrollToPosition(section) {
    window.scroll({
        top: section,
        behavior: 'smooth',
    });
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}
// --> Fim do Scroll --> //