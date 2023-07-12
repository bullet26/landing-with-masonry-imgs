import { WorksTabsOverlayCardView, GalleryOverlayCardView } from './components/view/index';

const showOverlayCard = ({ contentSelector, viewComponent, contentNOTSelector, secondIteration = false }) => {
    let content = !!contentNOTSelector ? document.querySelectorAll(`${contentSelector}:not(${contentNOTSelector})`) : document.querySelectorAll(contentSelector);

    const makeSecondArray = classForCheking => {
        let resArr = [];

        content.forEach(item => {
            if (item.firstChild.nodeName === '#text' || !item.firstChild.classList.contains(classForCheking)) {
                resArr.push(item);
            }
        });
        return resArr;
    };

    if (viewComponent === 'work') {
        if (secondIteration) {
            content = makeSecondArray('work-content-cover');
        }
        content.forEach(item => WorksTabsOverlayCardView(item.dataset.work, item));
    }
    if (viewComponent === 'gallery') {
        if (secondIteration) {
            content = makeSecondArray('over-card');
        }

        content.forEach(item => GalleryOverlayCardView(item));
    }
};

export default showOverlayCard;
