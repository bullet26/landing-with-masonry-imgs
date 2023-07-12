import { zoomImg } from '../animate';

const GalleryModal = ({ parentSelector, buttonSelector, modalShowClass, modalContentSelector, modalSelector }) => {
    const buttonParent = document.querySelector(parentSelector);
    const modal = document.querySelector(`.${modalSelector}`);
    const modalContent = document.querySelector(`.${modalContentSelector}`);

    const openModal = target => {
        modal.classList.add(modalShowClass);
        zoomImg(modal);

        modalContent.append(getFullImage(target));

        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove(modalShowClass);
        document.body.style.overflow = 'auto';

        modalContent.innerHTML = '';
    };

    const getFullImage = target => {
        const targetCard = !!target.closest('.subgrid-item') ? target.closest('.subgrid-item') : target.closest('.grid-item');
        const imgUrl = targetCard.querySelector('img').getAttribute('src');
        const image = document.createElement('img');
        image.setAttribute('src', imgUrl);
        image.classList.add('full-size');
        return image;
    };

    buttonParent.addEventListener('click', event => {
        const target = event.target;
        const parent = event.target.parentElement;
        if (target.classList.contains(buttonSelector) || parent.classList.contains(buttonSelector)) {
            openModal(event.target);
        }
    });

    modal.addEventListener('click', event => {
        if (event.target.classList.contains(modalSelector)) {
            closeModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modal.classList.contains(modalShowClass)) {
            closeModal();
        }
    });
};

export default GalleryModal;
