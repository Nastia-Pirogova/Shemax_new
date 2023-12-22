const minusBtns = document.querySelectorAll(".minus-btn");
const plusBtns = document.querySelectorAll(".plus-btn");

minusBtns.forEach((minusBtn) => {
    minusBtn.addEventListener("click", (event) => {
        const container = event.target.closest(".your-basket-quantity,.product-card-quantity");
        const quantityElement = container.querySelector(".js-quantity");

        if (quantityElement.textContent > 1) {
            quantityElement.textContent = Number.parseInt(quantityElement.textContent) - 1;
        }
    });
});

plusBtns.forEach((plusBtn) => {
    plusBtn.addEventListener("click", (event) => {
        const container = event.target.closest(".your-basket-quantity,.product-card-quantity");
        const quantityElement = container.querySelector(".js-quantity");

        quantityElement.textContent = Number.parseInt(quantityElement.textContent) + 1;
    });
});

const buttonUpdate = document.querySelector(".wp-element-button");

buttonUpdate.disabled = false;