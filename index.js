const burgerButton = document.querySelector('.burger')
const burgerImage = document.querySelector('.burger__image')
const navigation = document.querySelector('nav')
const navigationLinks = document.querySelectorAll('.nav__link')
const body = document.querySelector('body')



function changeBurgerMenu() {
  navigation.classList.toggle('active')
  body.classList.toggle('lock')
  changeBurgerImage()
}


function changeBurgerImage() {
  if (body.className === 'lock') {
    burgerImage.innerHTML = `
    <line y1="1" x2="40" y2="25" stroke="#717171" stroke-width="2"/>
    <line y1="25" x2="40" y2="1" stroke="#717171" stroke-width="2"/>
    `
  } else {
    burgerImage.innerHTML = `
    <line y1="1" x2="40" y2="1" stroke="#717171" stroke-width="2"/>
    <line y1="9" x2="40" y2="9" stroke="#717171" stroke-width="2"/>
    <line y1="17" x2="40" y2="17" stroke="#717171" stroke-width="2"/>
    <line y1="25" x2="40" y2="25" stroke="#717171" stroke-width="2"/>
    `
  }
}



burgerButton.addEventListener('click', changeBurgerMenu)

for (let navLink of navigationLinks) {
  navLink.addEventListener('click', changeBurgerMenu)
}