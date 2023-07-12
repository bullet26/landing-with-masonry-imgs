'use strict';

import '@babel/polyfill';
import './index.html';
import './index.scss';

import { getImageForWorkTabs, getImageForGallery } from './modules/services/index';

import GalleryOfImages from './modules/components/GalleryOfImages';
import ServicesTabs from './modules/components/ServicesTabs';
import WorksTabs from './modules/components/WorksTabs';
import FeedbackSlider from './modules/components/FeedbackSlider';
import GalleryModal from './modules/components/GalleryModal';
import HamburgerMenu from './modules/components/HamburgerMenu';

getImageForWorkTabs('Desighn', '#btn-work', 12);
getImageForGallery('Photo', '#btn-gallery', 9);

ServicesTabs({ btnSelector: '#btn-work', tabsSelector: '.tabs-item', tabsContentSelector: '.tabs-wrapper', tabsParentSElector: '.tabheader', activeClass: 'active' });
WorksTabs({
    filterSelector: '.work-header-item',
    filterContentSelector: '.work-content-item',
    filterParentSElector: '.work-header',
    activeClass: 'active',
    buttonSelector: '#btn-work',
    selectorForMessage: '.work-wrapper',
    selectorForContent: '.work-content',
});
GalleryOfImages({ buttonSelector: '#btn-gallery', selectorForMessage: '.grid-wrapper', selectorForContent: '.grid' });
FeedbackSlider({
    activeClass: 'active-indicator',
    slideSelector: '.slider-item',
    slideIndicatorSelector: '.slider-indicators-item',
    slideIndicatorParentSelector: '.slider-indicators',
    slideIndicatorDots: 'slider-indicators-img',
    nextArrowSelector: '.arrow-next',
    prevArrowSelector: '.arrow-prev',
});

GalleryModal({ parentSelector: '.grid', buttonSelector: 'scale', modalContentSelector: 'modal-content', modalShowClass: 'show-modal', modalSelector: 'modal' });
HamburgerMenu({ menuItemSelector: 'navbar-link', menuSelector: '.navbar', activeClassForMenu: 'navbar_active', activeClassForButton: 'hamburger_active', buttonSelector: '.hamburger' });
