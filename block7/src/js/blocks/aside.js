const btnMenu = document.querySelector('.header__menu')
const menu = document.querySelector('.menu')
const toggleMenu = function () {
  menu.classList.toggle('menu--active')
}

document.querySelector('.menu').addEventListener('click', function (e) {
  if (e.clientX > 320) {
    toggleMenu()
  }
})
document.querySelector('.header__menu').addEventListener('click', function () {
  toggleMenu()
})
document
  .querySelector('.menu__header--close')
  .addEventListener('click', toggleMenu)

console.log(document.querySelectorAll('.menu__links li a'))
const menuLinks = document.querySelectorAll('.menu__links li a')
for (const menuLink of menuLinks) {
  menuLink.addEventListener('click', (e) => {
    const links = document.querySelectorAll('.menu__link')
    for (const link of links) {
      link.classList.remove('menu__link--active')
    }
    e.target.classList.add('menu__link--active')
  })
}
