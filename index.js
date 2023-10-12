const burgerButton = document.querySelector('.burger')
const burgerImage = document.querySelector('.burger__image')
const navigation = document.querySelector('nav')
const navigationLinks = document.querySelectorAll('.nav__link')
const body = document.querySelector('body')



function changeBurgerMenu() {
  // Toggle navigation menu
  navigation.classList.toggle('active')
  body.classList.toggle('lock')

  // Toggle burger image
  if (navigation.className === 'active') {
    burgerImage.src = 'assets/burger_cross.svg'
  } else {
    burgerImage.src = 'assets/burger.svg'
  }
}


burgerButton.addEventListener('click', changeBurgerMenu)

for (let navLink of navigationLinks) {
  navLink.addEventListener('click', changeBurgerMenu)
}


document.addEventListener('click', event => {
  const isMenu = event.target == navigation || navigation.contains(event.target)
  const isBurger = event.target == burgerButton || event.target == burgerImage
  const isActive = navigation.className === 'active'

  if (!isMenu && isActive && !isBurger) {changeBurgerMenu()}
})