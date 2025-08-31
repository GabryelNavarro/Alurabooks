const swiperLancamentos = new Swiper('.carroesel .swiper', {
  spaceBetween: 10,
  slidesPerView: 3,
  pagination: {
    el: '.carroesel .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.carroesel .swiper-button-next',
    prevEl: '.carroesel .swiper-button-prev',
  },
});

new Swiper('.swiper-vendidos', {
  spaceBetween: 10,
  slidesPerView: 3,
  pagination: {
    el: '.carrosel__vendidos .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-vendidos .swiper-button-next',
    prevEl: '.swiper-vendidos .swiper-button-prev',
  },
});