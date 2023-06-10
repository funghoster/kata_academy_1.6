console.log(document.querySelectorAll('.main__list li a'))
const mainList = document.querySelectorAll('.main__list li a')
for (const mainItem of mainList) {
  mainItem.addEventListener('click', (e) => {
    const items = document.querySelectorAll('.main__item')
    for (const item of items) {
      item.classList.remove('main__item--focus')
    }
    e.target.classList.add('main__item--focus')
  })
}
