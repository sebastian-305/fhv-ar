// Deprecated, only for developement
/*function get_random_info() {
    let random = Math.floor(Math.random() * 4);
    let landmarks = ['aa132f5f6', 'ba232f5f6', 'a5132f5f6', 'fd'];

    let result = get_landmark(landmarks[random]);

    console.log(result);
    set_infobox_and_show(result);
}*/

function set_infobox_and_show(result) {
    document.getElementById(
        'info-sheet-img',
    ).src = `./resources/info/${result.info_text}`;
    document.getElementById(
        'info-picture-img',
    ).src = `./resources/info/${result.picture}`;

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

    //Due to a Bug in mobile, this did not execute if it was around the same time as the overlay manipulation
    setTimeout(() => {
        document.getElementById('qr-wrapper').style.display = 'block';
        document.getElementById('info-wrapper').style.display = 'none';
    }, 300);

    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
    }, 500);
}
