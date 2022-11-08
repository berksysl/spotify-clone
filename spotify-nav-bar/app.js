const navSection = document.querySelector('.hamburger-lines');
let menuOpen = false;
navSection.addEventListener('click', () => {
    if(!menuOpen){
        navSection.classList.add('open');
        menuOpen = true;
    }
    else {
        navSection.classList.remove('open');
        menuOpen = false;
    }
});
