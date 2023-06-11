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
    const transformBrands = document.querySelector('.brands__content')
    const transformRepair = document.querySelector('.repair__content')
    swiper.disable()
    transformBrands.style.transform = 'none'
    transformRepair.style.transform = 'none'
  }
})
