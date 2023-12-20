const minusBtns = document.querySelectorAll(".minus-btn");
const plusBtns = document.querySelectorAll(".plus-btn");
const quantities = document.querySelectorAll(".js-quantity");

minusBtns.forEach((minusBtn, index) => {
    minusBtn.addEventListener("click", () => {
        if (quantities[index].value > 1) {
            quantities[index].value = Number.parseInt(quantities[index].value) - 1;
        }
    });
});

plusBtns.forEach((plusBtn, index) => {
    plusBtn.addEventListener("click", () => {
        quantities[index].value = Number.parseInt(quantities[index].value) + 1;
    });
});

const buttonUpdate = document.querySelector(".wp-element-button");

buttonUpdate.disabled = false;
buttonUpdate.removeAttribute("aria-disabled");