const categoryProducts = new Swiper('.category-products-slider', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.slider-category-next',
        prevEl: '.slider-category-prev',
    },
});