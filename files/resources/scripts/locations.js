const locations = [
    {
        name: 'inatura',
        code: 'ba232f5f6',
        pic: 'inatura-pic.jpg',
        text: 'inatura-text.png',
        lat: {
            min: 47.408521,
            max: 47.409926,
        },
        long: {
            min: 9.737669,
            max: 9.740158,
        },
    },
    {
        name: 'rotes_haus',
        code: 'aa132f5f6',
        pic: 'rotes-haus-pic.jpg',
        text: 'rotes-haus-text.png',
        lat: {
            min: 47.413068,
            max: 47.413609,
        },
        long: {
            min: 9.741949,
            max: 9.742486,
        },
    },
    {
        name: 'karren',
        code: 'a5132f5f6',
        pic: 'karren-pic.jpg',
        text: 'karren-text.png',
        lat: {
            min: 47.387707,
            max: 47.400835,
        },
        long: {
            min: 9.750212,
            max: 9.754469,
        },
    },
    {
        name: 'fhv',
        code: 'c5182fhv6',
        pic: 'fhv-pic.jpg',
        text: 'fhv-text.png',
        lat: {
            min: 47.404896,
            max: 47.4073,
        },
        long: {
            min: 9.742522,
            max: 9.746772,
        },
    },
];

function get_landmark(landmarkCode) {
    const result = {picture: '', info_text: ''};

    result.info_text = 'unbekannt.png';
    result.picture = 'sad.png';

    for (const landmark of locations) {
        if (landmark.code === landmarkCode) {
            result.picture = landmark.pic;
            result.info_text = landmark.text;
        }
    }
    return result;
}
