import { fadeIn } from '../animate';
import { removeShowClasses } from '../hideAndShowClasses';
import showOverlayCard from '../showOverlayCard';
import setContent from '../setContent';

const WorksTabs = ({ filterSelector, filterContentSelector, filterParentSElector, activeClass, buttonSelector, selectorForMessage, selectorForContent }) => {
    const filter = document.querySelectorAll(filterSelector);
    const button = document.querySelector(buttonSelector);
    const filterParent = document.querySelector(filterParentSElector);
    let selectedFilter;
    let activeFilter = 'All';

    const displayBtn = (show = true) => {
        show === true ? button.classList.remove('button_inactive') : button.classList.add('button_inactive');
    };

    const ShowFilteredContent = (activeFilter, filterContentSelector) => {
        const filterContent = document.querySelectorAll(filterContentSelector);

        let filteredArr = [];

        Array.from(filter)
            .find(item => item.dataset.work === activeFilter)
            .classList.add(activeClass);

        if (activeFilter === 'All') {
            displayBtn(true);
            filteredArr = [...filterContent];
        } else {
            activeFilter === 'Wordpress' ? displayBtn(true) : displayBtn(false);
            filteredArr = Array.from(filterContent).filter(item => item.dataset.work === activeFilter);
        }

        filteredArr.forEach(item => {
            fadeIn(item);
            item.classList.add('show');
            item.classList.remove('hide');
        });
    };

    filterParent.addEventListener('click', event => {
        const target = event.target;

        if (!!target && target.classList.contains(filterSelector.replace(/\./, ''))) {
            activeFilter = target.dataset.work;

            if (activeFilter !== selectedFilter) {
                selectedFilter = activeFilter;
                removeShowClasses(filterContentSelector, filter, activeClass);

                ShowFilteredContent(activeFilter, filterContentSelector);
            }
        }
    });

    showOverlayCard({ contentSelector: filterContentSelector, viewComponent: 'work' });

    setContent({ buttonSelector, selectorForMessage, selectorForContent, selectorForOverlayCard: filterContentSelector, sectionName: 'Amazing Work', viewComponent: 'work' });

    button.addEventListener('fetching', () => {
        const statusFetch = button.dataset.fetch;

        if (statusFetch === 'fetched') {
            setTimeout(() => {
                removeShowClasses(filterContentSelector, filter, activeClass);

                ShowFilteredContent(activeFilter, filterContentSelector);
            }, 100);
        }
    });
};

export default WorksTabs;
