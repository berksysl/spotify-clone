const navSection = document.querySelector('.hamburger-lines');
const mobileNav = document.querySelector('.mobile-nav');
navSection.addEventListener('click', () => {
    navSection.classList.toggle("open");
    mobileNav.classList.toggle("open");
});
