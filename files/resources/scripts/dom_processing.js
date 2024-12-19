function set_infobox_and_show(result) {
    document.getElementById(
        'info-sheet-img',
    ).src = `resources/info/${result.info_text}`;
    document.getElementById(
        'info-picture-img',
    ).src = `resources/info/${result.picture}`;

    document.getElementById('qr-wrapper').style.display = 'none';
    document.getElementById('info-wrapper').style.display = 'block';
}

function open_overlay() {
    document.getElementById('overlay').style.display = 'block';
    setTimeout(
        () => (document.getElementById('overlay').style.opacity = 1),
        10,
    );
}

function close_overlay() {
    document.getElementById('overlay').style.opacity = 0;

    //Due to a bug in mobile, this did not execute if it was around the same time as the overlay manipulation
    setTimeout(() => {
        document.getElementById('qr-wrapper').style.display = 'block';
        document.getElementById('info-wrapper').style.display = 'none';
    }, 300);

    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
    }, 500);
}
