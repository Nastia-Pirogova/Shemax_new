document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const thumbnails = document.querySelectorAll(".thumbnail");
    let slideIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            slideIndex = slider.children.length - 1;
        } else if (index >= slider.children.length) {
            slideIndex = 0;
        } else {
            slideIndex = index;
        }

        const translateValue = -slideIndex * 100 + "%";
        slider.style.transform = "translateX(" + translateValue + ")";

        thumbnails.forEach((thumbnail, i) => {
            thumbnail.classList.toggle("active", i === slideIndex);
        });
    }

    function updateThumbnailsVisibility() {
        const windowWidth = window.innerWidth;

        if (windowWidth >= 1440) {
            toggleThumbnails(4);
        } else if (windowWidth >= 768) {
            toggleThumbnails(2);
        } else if (windowWidth >= 320) {
            toggleThumbnails(3);
        }
    }

    function toggleThumbnails(visibleCount) {
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.style.display = index < visibleCount ? "block" : "none";
        });
    }

    function nextSlide() {
        showSlide(slideIndex + 1);
        updateThumbnailsVisibility();
    }

    function prevSlide() {
        showSlide(slideIndex - 1);
        updateThumbnailsVisibility();
    }

    window.addEventListener("resize", updateThumbnailsVisibility);

    updateThumbnailsVisibility();

    setInterval(nextSlide, 5000);

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => showSlide(index));
    });
});