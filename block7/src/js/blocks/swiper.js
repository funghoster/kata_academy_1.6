const swiper = new Swiper('.swiper', {
  enabled: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination'
  }
})

addEventListener('load', function () {
  const width = document.documentElement.clientWidth
  if (width < 768) {
    swiper.enable()
  } else {
    swiper.disable()
  }
})
window.addEventListener('resize', function () {
  const width = document.documentElement.clientWidth
  if (width < 768) {
    swiper.enable()
  } else {
    const transform = document.querySelector('.brands__content')
    swiper.disable()
    transform.style.transform = 'none'
  }
})
