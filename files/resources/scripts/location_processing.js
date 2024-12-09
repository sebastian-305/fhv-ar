function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById('location-span').innerHTML =
            'Geolocation wird von diesem Browser nicht unterstützt!.';
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    switch (position) {
        case lat > locations.inatura.lat.min &&
        lat < locations.inatura.lat.max &&
        long > locations.inatura.long.min &&
        long < locations.inatura.long.max
            ? position
            : -1:
            set_infobox_and_show(get_landmark(locations.inatura.code));
            break;
        case lat > locations.karren.lat.min &&
        lat < locations.karren.lat.max &&
        long > locations.karren.long.min &&
        long < locations.karren.long.max
            ? position
            : -1:
            set_infobox_and_show(get_landmark(locations.karren.code));
            break;
        case lat > locations.rotes_haus.lat.min &&
        lat < locations.rotes_haus.lat.max &&
        long > locations.rotes_haus.long.min &&
        long < locations.rotes_haus.long.max
            ? position
            : -1:
            set_infobox_and_show(get_landmark(locations.rotes_haus.code));
            break;
        default:
            document.getElementById('location-span').innerHTML =
                'Keine Infotafel an deinen Koordinaten gefunden!';
    }
}
