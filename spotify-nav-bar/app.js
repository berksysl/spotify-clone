const navSection = document.querySelector('.hamburger-lines');
const mobileNav = document.querySelector('.mobile-nav');
const logo = document.querySelector('.logo');

navSection.addEventListener('click', () => {
    navSection.classList.toggle("open");
    mobileNav.classList.toggle("open");
    logo.classList.toggle("open");
});
