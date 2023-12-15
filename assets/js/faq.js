const items = document.querySelectorAll(".faq-button");

items.forEach(item => {
    item.addEventListener('click', toggleAccordion);
});

function toggleAccordion() {

    const content = this.nextElementSibling;


    content.classList.toggle("faq-active");


    const icon = this.querySelector(".faq-icon");


    if (icon) {
        icon.classList.toggle("faq-active-icon");
    }
}