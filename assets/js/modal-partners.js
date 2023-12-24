(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open-js]"),
        closeModalBtn: document.querySelector("[data-modal-close-js]"),
        modal: document.querySelector("[data-modal-js]"),
        modal1: document.querySelector("#myModal1"),
        form: document.getElementById("myForm"),
        closeModalBtn1: document.querySelector("[data-modal-close-js-1]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn1.addEventListener("click", closeThank);
    refs.form.addEventListener("submit", handleSubmit);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");

        const isModalOpen = !refs.modal.classList.contains("is-hidden");

        if (isModalOpen) {
            disableScroll();
        } else {
            enableScroll();
        }
    }

    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    function enableScroll() {
        document.body.style.overflow = '';
    }

    function handleSubmit(e) {
        e.preventDefault();
        refs.modal1.classList.toggle("is-hidden");

        setTimeout(() => {
            toggleModal();
        }, 500);
    }

    function closeThank() {
        refs.modal1.classList.toggle("is-hidden");
        toggleModal();
    }
})();