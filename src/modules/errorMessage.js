import imgSrc from '../img/error.gif';

export const errorMessage = parentSelector => {
    const parent = document.querySelector(parentSelector);

    const img = document.createElement('img');
    img.classList.add('errorMessage');
    img.setAttribute('src', imgSrc);

    parent.append(img);
};

export const removeErrorMessage = () => {
    document.querySelector('.errorMessage')?.remove();
};
