const locations = {
    inatura: {
        code: 'ba232f5f6',
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
        code: 'aa132f5f6',
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
        code: 'a5132f5f6',
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

function get_landmark(landmarkCode) {
    const result = {picture: '', info_text: ''};
    switch (landmarkCode) {
        case locations.rotes_haus.code:
            result.picture = 'rotes-haus-pic.jpg';
            result.info_text = 'rotes-haus-text.png';
            break;
        case locations.inatura.code:
            result.picture = 'inatura-pic.jpg';
            result.info_text = 'inatura-text.png';
            break;
        case locations.karren.code:
            result.picture = 'karren-pic.jpg';
            result.info_text = 'karren-text.png';
            break;
        default:
            result.info_text = 'unbekannt.png';
            result.picture = 'sad.png';
    }
    return result;
}
