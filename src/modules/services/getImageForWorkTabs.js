import findImage from '../api/findImage';

const getImageForWorkTabs = (query, buttonSelector, quantity) => {
    const { request } = findImage();

    const button = document.querySelector(buttonSelector);

    let page = 1;

    button.addEventListener('click', () => {
        let event = new CustomEvent('fetching');
        button.dataset.fetch = 'loading';
        button.dispatchEvent(event);

        if (page >= 2) {
            button.remove();
        }

        request(query, quantity, page)
            .then(data => {
                localStorage.setItem('images-works', data);
            })
            .then(() => {
                button.dataset.fetch = 'fetched';
                button.dispatchEvent(event);

                page++;
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

export default getImageForWorkTabs;
