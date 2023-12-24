const swiper = new Swiper('.swiper-news-post', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    breakpoints: {

        768: {
            slidesPerView: 2,
        },


        1440: {
            slidesPerView: 3,
        },
    },
});