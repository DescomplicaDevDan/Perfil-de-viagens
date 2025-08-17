const galleryImages = document.querySelectorAll('.gallery-image');

const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.querySelector('.modal-close');

function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        openModal(image.src);
    });
});

modalClose.addEventListener('click', () => {
    closeModal();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

const menuToggle = document.getElementById('menu-toggle');
const primaryMenu = document.getElementById('primary-menu');

menuToggle.addEventListener('click', () => {
    primaryMenu.classList.toggle('is-visible');
});