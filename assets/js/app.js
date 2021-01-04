// Navbar on Scroll
window.onscroll  = function () {navOnScroll()};
function navOnScroll() {
    const navBar        = document.querySelector('.navbar');
    const navbarBrand   = document.querySelector('.navbar-brand');
    const navLink       = document.querySelectorAll('.nav-link');
    const socmedIcon    = document.querySelector('.social-media');
    const navbarToggler = document.getElementById('navbar-toggler-icon');
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 200) {
        navBar.classList.add('bg-white');
        for(let i = 0; i < navLink.length; i++) {
            navLink[i].classList.remove('text-white');
        }
        navbarToggler.classList.remove('text-white');
        navbarBrand.classList.remove('text-white');
        socmedIcon.classList.remove('text-white');
    } else {
        navBar.classList.remove('bg-white');
        for(let i = 0; i < navLink.length; i++) {
            navLink[i].classList.add('text-white');
        }
        navbarToggler.classList.add('text-white');
        navbarBrand.classList.add('text-white');
        socmedIcon.classList.add('text-white');
    }
    navBar.style.transition = '0.5s all ease';
}

// Typed JS
let welcomeText = new Typed('#welcome-text', {
    strings: ['Portfolio', 'Journey', 'Experience'],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('finish');
});

// AOS JS
AOS.init();