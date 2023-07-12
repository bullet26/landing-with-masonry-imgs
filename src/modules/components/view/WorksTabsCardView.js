const WorksTabsCardView = (url, parent, title) => {
    const View = `<div class="work-content-item" data-work=${title}>
    <img class="work-content-item-img" src=${url} />
</div>`;

    parent.insertAdjacentHTML('beforeend', View);
};

export default WorksTabsCardView;
