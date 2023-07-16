const buttonMenu = document.getElementById('buttonMenu')


buttonMenu.addEventListener('click', function () {
const menuHamb = document.getElementById('menuHamb')
menuHamb.classList.remove('header__navHamb__ul')
menuHamb.classList.add('header__navHamb__ul--b')
console.log(menuHamb)
});


const cierreX = document.getElementById('cierreX')


cierreX.addEventListener('click', function () {
const menuHamb = document.getElementById('menuHamb')
menuHamb.classList.remove('header__navHamb__ul--b')
menuHamb.classList.add('header__navHamb__ul')
console.log(menuHamb)
});