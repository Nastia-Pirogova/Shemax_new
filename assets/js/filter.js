const swiperFilter = new Swiper('.swiper-category', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-category',
        prevEl: '.swiper-button-prev-category',
    },
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 2.5,
        },


        1440: {
            slidesPerView: 4,
            allowTouchMove: false,
        },
    },
});
