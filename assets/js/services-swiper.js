let mySwiper;
document.addEventListener("DOMContentLoaded", function () {

    checkScreenWidth();//Check
    window.addEventListener('resize', checkScreenWidth);
});

function checkScreenWidth() {


    if (window.innerWidth < 768) {
        if (!mySwiper) {
            myFunction()

            initSwiper();
        }
    } else if(window.innerWidth >=768 && window.innerWidth <= 1240) {
        destroySwiper();
        addTabletStyle()
    } else {
        destroySwiper();
        addDeskTopStyle();
    }
}

function initSwiper() {
    if (!mySwiper) {
        mySwiper = new Swiper('.swiper', {
            loop: true,
            navigation: {
                nextEl: '.s-button-next',
                prevEl: '.s-button-prev',
            },
        });
    }
}

function destroySwiper() {
    if (mySwiper) {
        mySwiper.forEach(function(swiper) {
            swiper.destroy(true, true);
        });
        mySwiper = undefined;
    }
}

function myFunction() {
    var element = document.getElementById("services-swiper-js");
    element.classList.add("swiper-wrapper");
    element.classList.add("services-swiper");
}


function addTabletStyle() {
    var element = document.getElementById("services-swiper-js");
    element.classList.remove("swiper-wrapper", "services-swiper");
}


function addDeskTopStyle() {

}



