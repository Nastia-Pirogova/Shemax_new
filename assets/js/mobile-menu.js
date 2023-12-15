(() => {
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const modal = document.querySelector("[data-modal]");

    const toggleMenu = () => {
        const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        modal.classList.toggle('is-hidden');
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    const refs = {
        modal: document.querySelector("[data-modal]"),
    };

    const toggleModal = () => {
        refs.modal.classList.toggle("is-hidden");
    };

    const toggleModalBtn = document.querySelector('.js-toggle-modal');
    if (toggleModalBtn) {
        toggleModalBtn.addEventListener('click', toggleModal);
    }
})();

