const GalleryOverlayCardView = parent => {
    const View = `<div class="over-card">
                                <div class="over-card-item search">
                                <svg  width="15" height="15" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" fill="#F8FCFE"/></svg>
</div>
                                <div class="over-card-item scale">
                            <svg width="15" height="15"  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <title>press for show full-size image</title>
                            <path d="M5.07629,94.38086A1.0026,1.0026,0,0,0,6,94.99994H20A1,1,0,1,0,20,93H8.41418L40.70709,60.70709a1,1,0,0,0-1.41418-1.41424L7,91.58575V80a1,1,0,0,0-2,0V94l.00043.00208A1.00031,1.00031,0,0,0,5.07629,94.38086Z" fill="#F8FCFE"/>
                            <path d="M6,21a1,1,0,0,0,1-1V8.41418L39.29291,40.70709a1,1,0,1,0,1.41418-1.41424L8.41412,6.99994,20,7a1,1,0,0,0,0-2H6A1.0028,1.0028,0,0,0,5,6V20A1,1,0,0,0,6,21Z" fill="#F8FCFE"/>
                            <path d="M94.70709,5.29291A1.01032,1.01032,0,0,0,94,5H80a1,1,0,0,0,0,2H91.58582L59.29291,39.29285a1,1,0,1,0,1.41418,1.41424L93,8.41418V20a1,1,0,0,0,2,0V6a1.01032,1.01032,0,0,0-.29291-.70709Z" fill="#F8FCFE"/>
                            <path d="M94,79a1,1,0,0,0-.99994,1H93V91.58575L60.70709,59.29285a1,1,0,0,0-1.41418,1.41424L91.58575,92.99994,80,93a1,1,0,0,0,0,2l14-.00006a1.00144,1.00144,0,0,0,.99957-.99786L95,94V80A1,1,0,0,0,94,79Z" fill="#F8FCFE"/></svg>

                                </div>
                            </div>`;

    parent.insertAdjacentHTML('afterbegin', View);
};

export default GalleryOverlayCardView;
