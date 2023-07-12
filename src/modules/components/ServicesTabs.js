import { translateShowImg } from '../animate';
import { removeShowClasses, addShowedClasses } from '../hideAndShowClasses';

function ServicesTabs({ tabsSelector, tabsContentSelector, tabsParentSElector, activeClass }) {
    const tabs = document.querySelectorAll(tabsSelector);
    const tabsParent = document.querySelector(tabsParentSElector);
    let selectedSlider = 0;

    removeShowClasses(tabsContentSelector, tabs, activeClass);
    addShowedClasses(translateShowImg, tabsContentSelector, tabs, activeClass);

    tabsParent.addEventListener('click', event => {
        const target = event.target;

        if (!!target && target.classList.contains(tabsSelector.replace(/\./, ''))) {
            tabs.forEach((item, i) => {
                if (target == item && selectedSlider !== i) {
                    selectedSlider = i;
                    removeShowClasses(tabsContentSelector, tabs, activeClass);
                    addShowedClasses(translateShowImg, tabsContentSelector, tabs, activeClass, i);
                }
            });
        }
    });
}

export default ServicesTabs;
