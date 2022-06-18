const navigation = document.querySelector('.navigation')
const menuBar = document.querySelector('.menu-bar')
const menuMobile = document.querySelector('.menu-mobile')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close')
const backToTop = document.querySelector('.back-to-top')

// scroll event
window.addEventListener('scroll', () => {
    document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ? navigation.classList.add("active") : navigation.classList.remove("active");

    document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? backToTop.classList.add("active") : backToTop.classList.remove("active");

})


// back to top function
const scrollTop = () => {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0, -50);
        var timeout = setTimeout('scrollTop()', 10);
    } else clearTimeout(timeout);
}
backToTop.addEventListener('click', scrollTop)

// toggle menu mobile

menuBar.addEventListener('click', () => {
    menuMobile.classList.add('active')
    overlay.classList.add('active')
})

const closeMenu = () => {
    menuMobile.classList.remove('active')
    overlay.classList.remove('active')
}

closeBtn.addEventListener('click', () => {
    closeMenu()
});
overlay.addEventListener('click', () => {
    closeMenu()
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1500
});


sr.reveal(`.header-main`);
sr.reveal(`.brand`, { delay: 500 });
sr.reveal(`.services`, { delay: 500 });
sr.reveal(`.top-marketing`, { delay: 500 });
sr.reveal(`.goal`, { delay: 500 });
sr.reveal(`.feedback`, { delay: 500 });
sr.reveal(`.blog`, { delay: 500 });
sr.reveal(`.subscribes`, { delay: 500 });
sr.reveal(`.footer`, { delay: 500 });