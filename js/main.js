const btnHamburger = document.getElementById('hamburger');
const btnClosed = document.querySelector('.close')
const menuMobile = document.querySelector('.cont-nav-mobile');


btnHamburger.addEventListener('click', function() {
    menuMobile.classList.add('nav-mobile--active')
});

btnClosed.addEventListener('click', function() {
    menuMobile.classList.remove('nav-mobile--active')
});