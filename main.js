/* APERTURA MENU HAMB */
const buttonMenu = document.getElementById('buttonMenu')

buttonMenu.addEventListener('click', function () {
    const menuHamb = document.getElementById('menuHamb')
    const videoDesenfoque = document.getElementById('videoBlur')
    menuHamb.style.display = 'flex'

    setTimeout(function () {
        menuHamb.classList.remove('header__navHamb__ul')
        menuHamb.classList.add('header__navHamb__ul--b')
        videoDesenfoque.style.filter = 'blur(5px)'
        },10)
});


/* CIERRE MENU HAMB */
const cierreX = document.getElementById('cierreX')

    cierreX.addEventListener('click', function () {
        const menuHamb = document.getElementById('menuHamb')
        const videoDesenfoque = document.getElementById('videoBlur')
        menuHamb.classList.remove('header__navHamb__ul--b')
        menuHamb.classList.add('header__navHamb__ul')
        setTimeout(function () {
            menuHamb.style.display = 'none'
            },1000)
        videoDesenfoque.style.filter = 'blur(0)'
});









