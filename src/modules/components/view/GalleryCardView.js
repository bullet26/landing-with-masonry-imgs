const GalleryCardView = (url, parent) => {
    const View = `<div class="grid-item grid-item-api">
    <img src=${url}  class="grid-item-img" alt="new-house" />
</div>`;

    parent.insertAdjacentHTML('beforeend', View);
};

export default GalleryCardView;
