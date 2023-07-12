import { zoomImg } from '../animate';
import { removeShowClasses, addShowedClasses } from '../hideAndShowClasses';

const FeedbackSlider = ({ slideSelector, slideIndicatorSelector, slideIndicatorDots, activeClass, nextArrowSelector, prevArrowSelector, slideIndicatorParentSelector }) => {
    let slideIndex = 2;
    let selectedSlide = slideIndex;

    const slideIndicator = document.querySelectorAll(slideIndicatorSelector);
    const slideIndicatorParent = document.querySelector(slideIndicatorParentSelector);
    const sliderQuant = slideIndicator.length - 1;
    const nextArrow = document.querySelector(nextArrowSelector);
    const prevArrow = document.querySelector(prevArrowSelector);

    removeShowClasses(slideSelector, slideIndicator, activeClass);
    addShowedClasses(zoomImg, slideSelector, slideIndicator, activeClass, slideIndex);

    nextArrow.addEventListener('click', () => {
        slideIndex++;

        if (slideIndex <= sliderQuant) {
            removeShowClasses(slideSelector, slideIndicator, activeClass);
            addShowedClasses(zoomImg, slideSelector, slideIndicator, activeClass, slideIndex);
        } else {
            slideIndex = 0;
            removeShowClasses(slideSelector, slideIndicator, activeClass);
            addShowedClasses(zoomImg, slideSelector, slideIndicator, activeClass, slideIndex);
        }
    });

    prevArrow.addEventListener('click', () => {
        slideIndex--;

        if (slideIndex <= sliderQuant && slideIndex >= 0) {
            removeShowClasses(slideSelector, slideIndicator, activeClass);
            addShowedClasses(zoomImg, slideSelector, slideIndicator, activeClass, slideIndex);
        } else {
            slideIndex = sliderQuant;
            removeShowClasses(slideSelector, slideIndicator, activeClass);
            addShowedClasses(zoomImg, slideSelector, slideIndicator, activeClass, slideIndex);
        }
    });

    slideIndicatorParent.addEventListener('click', event => {
        const target = event.target;

        if (!!target && target.classList.contains(slideIndicatorDots)) {
            slideIndex = target.parentElement.dataset.index;
            if (slideIndex !== selectedSlide) {
                selectedSlide = slideIndex;
                removeShowClasses(slideSelector, slideIndicator, activeClass);
                addShowedClasses(zoomImg, slideSelector, slideIndicator, activeClass, slideIndex);
            }
        }
    });
};

export default FeedbackSlider;
