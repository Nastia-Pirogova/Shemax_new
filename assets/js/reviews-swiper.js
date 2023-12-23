const swiper = new Swiper('.swiper-2', {
    loop: true,
    navigation: {
        nextEl: '.right-button-reviews',
        prevEl: '.left-button-reviews',
    },
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
});