const navigation = document.querySelector('.navigation')
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        navigation.classList.add("active")
    } else {
        navigation.classList.remove("active")
    }
})