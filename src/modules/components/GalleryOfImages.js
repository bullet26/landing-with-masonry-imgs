import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';

import showOverlayCard from '../showOverlayCard';
import setContent from '../setContent';

const GalleryOfImages = ({ buttonSelector, selectorForMessage, selectorForContent }) => {
    const grid = document.querySelector('.grid');
    const subgrid = document.querySelector('.subgrid');

    const button = document.querySelector(buttonSelector);

    // init Isotope after all images have loaded
    let msnrySub = new Masonry(subgrid, {
        itemSelector: '.subgrid-item',
        columnWidth: '.subgrid-sizer',
        gutter: 5,

        horizontalOrder: true,
    });

    imagesLoaded(subgrid).on('progress', function () {
        // layout Masonry after each image loads
        msnrySub.layout();
    });

    /////////////////////////////////////////////////////////////////////
    let msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 10,

        horizontalOrder: true,
        percentPosition: true,
    });

    imagesLoaded(grid).on('progress', function () {
        // layout Masonry after each image loads
        msnry.layout();
    });

    ////////////////////////////////////////////////////////

    button.addEventListener('fetching', () => {
        const statusFetch = button.dataset.fetch;

        if (statusFetch === 'waiting') {
            const elems = document.querySelectorAll('.grid-item-api');
            imagesLoaded(elems).on('always', function () {
                msnry.appended(elems);
            });
        }
    });

    showOverlayCard({ viewComponent: 'gallery', contentSelector: '.grid-item', contentNOTSelector: '.subgrid' });

    showOverlayCard({ viewComponent: 'gallery', contentSelector: '.subgrid-item' });

    setContent({
        buttonSelector,
        selectorForMessage,
        selectorForOverlayCard: '.grid-item',
        contentNOTSelector: '.subgrid',
        selectorForContent,
        sectionName: 'Gallery of best image',
        viewComponent: 'gallery',
    });
};

export default GalleryOfImages;
