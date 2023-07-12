import { loader, LoaderView, loaderRemove } from './loader';
import { errorMessage, removeErrorMessage } from './errorMessage';
import showOverlayCard from './showOverlayCard';
import { GalleryCardView, WorksTabsCardView } from './components/view/index';

import Masonry from 'masonry-layout';

const setContent = ({ buttonSelector, sectionName, selectorForMessage, contentNOTSelector, selectorForContent, selectorForOverlayCard, viewComponent }) => {
    const button = document.querySelector(buttonSelector);
    const parent = document.querySelector(selectorForContent);

    button.addEventListener('fetching', () => {
        const statusFetch = button.dataset.fetch;

        switch (statusFetch) {
            case 'loading':
                console.log(`${sectionName} ${statusFetch}`);

                button.setAttribute('disabled', true);

                LoaderView(selectorForMessage);
                loader(document.querySelector('.dots'), 'dots--animate');
                break;

            case 'fetched':
                console.log(`${sectionName} ${statusFetch}`);

                if (viewComponent === 'work') {
                    const data = localStorage.getItem('images-works').split(',');
                    data.map(item => WorksTabsCardView(item, parent, 'Wordpress'));
                    showOverlayCard({ viewComponent, contentSelector: selectorForOverlayCard, secondIteration: true });
                }

                if (viewComponent === 'gallery') {
                    const data = localStorage.getItem('images-gallery').split(',');
                    data.map(item => GalleryCardView(item, parent));
                    showOverlayCard({ viewComponent, contentSelector: selectorForOverlayCard, contentNOTSelector, secondIteration: true });
                }

                loaderRemove();
                button.removeAttribute('disabled');
                break;

            case 'error':
                console.log(`${sectionName} ${statusFetch}`);

                loaderRemove();
                errorMessage(selectorForMessage);
                break;

            case 'waiting':
                button.removeAttribute('disabled');
                setTimeout(removeErrorMessage, 2000);
                break;
        }
    });
};

export default setContent;
