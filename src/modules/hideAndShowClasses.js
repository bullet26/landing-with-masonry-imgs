export const removeShowClasses = (tabsContentSelector, tabIndicators, activeClass, showClass = 'show', hideClass = 'hide') => {
    const tabsContent = document.querySelectorAll(tabsContentSelector);

    tabsContent.forEach(item => {
        item.classList.add(hideClass);
        item.classList.remove(showClass);
    });
    tabIndicators.forEach(item => {
        item.classList.remove(activeClass);
    });
};

export const addShowedClasses = (animatonFunction, tabsContentSelector, tabIndicators, activeClass, tabIndex = 0, showClass = 'show', hideClass = 'hide') => {
    const tabsContent = document.querySelectorAll(tabsContentSelector);

    animatonFunction(tabsContent[tabIndex]);
    tabsContent[tabIndex].classList.add(showClass);
    tabsContent[tabIndex].classList.remove(hideClass);
    tabIndicators[tabIndex].classList.add(activeClass);
};
