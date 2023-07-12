export const loader = (element, className) => {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
        setTimeout(() => {
            loader(element, className);
        }, 500);
    }, 2500);
};

export const LoaderView = parentSelector => {
    const parent = document.querySelector(parentSelector);
    const View = `
<h3 class="loading-wrapper">Loading
  <div class="dots"><span class="dot z"></span><span class="dot f"></span><span class="dot s"></span><span class="dot t"><span class="dot l"></span></span></div>
</h3>`;
    parent.insertAdjacentHTML('beforeend', View);
};

export const loaderRemove = () => {
    document.querySelector('.loading-wrapper').remove();
};
