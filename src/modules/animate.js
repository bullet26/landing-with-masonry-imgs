export const translateShowImg = (elem, duration = 500) => {
    elem.animate(
        [
            { opacity: '0.1', transform: 'translateX(-500px)' },
            { opacity: '0.5', transform: 'translateX(-200px)' },
            { opacity: '1', transform: 'translateX(0px)' },
        ],
        { duration }
    );
    elem.style.transform = 'translateX(0)';
};

export const translateHideImg = (elem, duration = 500) => {
    elem.animate(
        [
            { opacity: '1', transform: 'translateY(0)' },
            { opacity: '0.5', transform: 'translateY(-200px)' },
            { opacity: '0.1', transform: 'translateY(-500px)' },
        ],
        { duration }
    );

    elem.style.transform = 'translateX(-500px)';
};

export const zoomImg = (elem, duration = 500) => {
    elem.animate(
        [
            { opacity: '0.1', transform: 'scale(0.1)' },
            { opacity: '0.3', transform: 'scale(0.5)' },
            { opacity: '1', transform: 'scale(1)' },
        ],
        { duration }
    );
};

export const fadeIn = (elem, duration = 500) => {
    elem.animate([{ opacity: '0.1' }, { opacity: '0.5' }, { opacity: '1' }], { duration });
};
