import findImage from '../api/findImage';

const getImageForGallery = (query, buttonSelector, quantity) => {
    const { request } = findImage();

    const button = document.querySelector(buttonSelector);
    let page = 1;

    button.addEventListener('click', () => {
        let event = new CustomEvent('fetching');

        button.dataset.fetch = 'loading';
        button.dispatchEvent(event);

        request(query, quantity, page, 'square', true)
            .then(data => localStorage.setItem('images-gallery', data))
            .then(() => {
                button.dataset.fetch = 'fetched';
                button.dispatchEvent(event);

                button.remove();
            })
            .catch(error => {
                button.dataset.fetch = 'error';
                console.log(`Something went wrong ${error.message}`);
                button.dispatchEvent(event);
            })
            .finally(() => {
                button.dataset.fetch = 'waiting';
                button.dispatchEvent(event);
            });
    });
};

export default getImageForGallery;
