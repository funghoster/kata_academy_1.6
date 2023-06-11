const mainButtons = document.getElementsByClassName('main__btn')
for (const button of mainButtons) {
  button.addEventListener('click', (e) => {
    e.target.classList.toggle('btn-hidden')
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.classList.toggle('btn-hidden')
      document
        .querySelector('.main__content')
        .classList.add('main__content--full')
    } else {
      e.target.previousElementSibling.classList.toggle('btn-hidden')
      document
        .querySelector('.main__content')
        .classList.remove('main__content--full')
    }
  })
}

const brandsButtons = document.getElementsByClassName('brands__btn')
for (const button of brandsButtons) {
  button.addEventListener('click', (e) => {
    e.target.classList.toggle('btn-hidden')
    if (e.target.nextElementSibling.classList.contains('brands__btn')) {
      e.target.nextElementSibling.classList.toggle('btn-hidden')
      document
        .querySelector('.brands__content')
        .classList.add('brands__content--full')
    } else {
      e.target.previousElementSibling.classList.toggle('btn-hidden')
      document
        .querySelector('.brands__content')
        .classList.remove('brands__content--full')
    }
  })
}

const repairButtons = document.getElementsByClassName('repair__btn')
for (const button of repairButtons) {
  button.addEventListener('click', (e) => {
    e.target.classList.toggle('btn-hidden')
    if (e.target.nextElementSibling.classList.contains('repair__btn')) {
      e.target.nextElementSibling.classList.toggle('btn-hidden')
      document
        .querySelector('.repair__content')
        .classList.add('repair__content--full')
    } else {
      e.target.previousElementSibling.classList.toggle('btn-hidden')
      document
        .querySelector('.repair__content')
        .classList.remove('repair__content--full')
    }
  })
}
