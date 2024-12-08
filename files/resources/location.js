const x = document.getElementById('demo_loc');
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = 'Geolocation is not supported by this browser.';
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    let locations = {
        inatura: {
            lat: {
                min: 47.408521,
                max: 47.409926,
            },
            long: {
                min: 9.737669,
                max: 9.740158,
            },
        },
        rotes_haus: {
            lat: {
                min: 47.413068,
                max: 47.413609,
            },
            long: {
                min: 9.741949,
                max: 9.742486,
            },
        },
        karren: {
            lat: {
                min: 47.387707,
                max: 47.400835,
            },
            long: {
                min: 9.750212,
                max: 9.754469,
            },
        },
    };

    console.log('Latitude: ' + lat + '<br>Longitude: ' + long);
    console.log('Latitude: ' + lat + '<br>Longitude: ' + long);

    switch (position) {
        case lat > locations.inatura.lat.min &&
        lat < locations.inatura.lat.max &&
        long > locations.inatura.long.min &&
        long < locations.inatura.long.max
            ? position
            : -1:
            set_infobox_and_show(get_landmark('ba232f5f6'));
            console.log('Inatura');
            break;
        case lat > locations.karren.lat.min &&
        lat < locations.karren.lat.max &&
        long > locations.karren.long.min &&
        long < locations.karren.long.max
            ? position
            : -1:
            set_infobox_and_show(get_landmark('a5132f5f6'));
            console.log('Karren');
            break;
        case lat > locations.rotes_haus.lat.min &&
        lat < locations.rotes_haus.lat.max &&
        long > locations.rotes_haus.long.min &&
        long < locations.rotes_haus.long.max
            ? position
            : -1:
            set_infobox_and_show(get_landmark('aa132f5f6'));
            console.log('Rotes Haus');
            break;
        default:
            console.log('Place unknown');
            document.getElementById('location-span').innerHTML =
                'Keine Infotafel an deinen Koordinaten gefunden!';
    }
}
