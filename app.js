const navSection = document.querySelector('.hamburger-lines');
const mobileNav = document.querySelector('.mobile-nav');
const logo = document.querySelector('.logo');
const body = document.querySelector('.body');

navSection.addEventListener('click', () => {
    navSection.classList.toggle("open");
    mobileNav.classList.toggle("open");
    logo.classList.toggle("open");
    body.classList.toggle("open");
});
