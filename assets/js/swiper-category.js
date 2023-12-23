const swiperCategory = new Swiper('.swiper-category-products', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-category',
        prevEl: '.swiper-button-prev-category',
    },
    slidesPerView: 'auto',
     //centeredSlides: true,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },


        1440: {
            slidesPerView: "auto",
        },
    },
});
