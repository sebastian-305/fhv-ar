function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById('location-span').innerHTML =
            'Geolocation wird von diesem Browser nicht unterstützt!';
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    for (const landmark of locations) {
        if (
            lat > landmark.lat.min &&
            lat < landmark.lat.max &&
            long > landmark.long.min &&
            long < landmark.long.max
        ) {
            set_infobox_and_show(get_landmark(landmark.code));
            return;
        }
    }

    document.getElementById('location-span').innerHTML =
        'Keine Infotafel an deinen Koordinaten gefunden!';
}
