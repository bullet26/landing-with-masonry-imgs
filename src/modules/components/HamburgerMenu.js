const HamburgerMenu = ({ buttonSelector, activeClassForMenu, activeClassForButton, menuSelector, menuItemSelector }) => {
    const button = document.querySelector(buttonSelector);
    const menu = document.querySelector(menuSelector);

    button.addEventListener('click', () => {
        button.classList.toggle(activeClassForButton);
        menu.classList.toggle(activeClassForMenu);
    });

    menu.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains(menuItemSelector) || target.parentElement.classList.contains(menuItemSelector)) {
            button.classList.toggle(activeClassForButton);
            menu.classList.toggle(activeClassForMenu);
        }
    });

    function hamburgerNavigation() {
        menu.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target;

            if (target.classList.contains(menuItemSelector)) {
                const label = target.dataset.menu;

                document.querySelector(`#${label}`).scrollIntoView({ block: 'start', behavior: 'smooth' });
                menu.classList.remove(activeClassForMenu);
            }
        });
    }
    hamburgerNavigation();
};

export default HamburgerMenu;
