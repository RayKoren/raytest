var express = require('express');
var router = express.Router();
var profiles = {
    title: "Profiles",
    profile1: [
        "Ray",
        "Great at Camping",
    ],
    profile2: [
        "Lucas",
        "Dude can Surf!",
    ],
    profile3: [
        "Andy",
        "Loves the Mountains!",
    ],
    image: [
        "https://avatars.slack-edge.com/2016-04-06/32555793029_18fcc6134e2e88df1fb0_512.jpg",
        "https://avatars.slack-edge.com/2016-03-28/29955887779_a46a198578689d2fb500_512.png", "https://avatars.slack-edge.com/2016-03-21/28458535094_42c95eb8307f1b7c09e7_512.jpg"
    ]
};
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Profiles',
        next: "/profile-1"
    });
});
router.get('/profile-1', function(req, res, next) {
    console.log(profiles.profile1);
    res.render('index', {
        desc: profiles.profile1[1],
        name: profiles.profile1[0],
        img: profiles.image[0],
        next: "/profile-2"

    });
});
router.get('/profile-2', function(req, res, next) {
    res.render('index', {
        desc: profiles.profile2[1],
        name: profiles.profile2[0],
        img: profiles.image[1],
        next: "/profile-3"
    });
});
router.get('/profile-3', function(req, res, next) {
    res.render('index', {
        desc: profiles.profile3[1],
        name: profiles.profile3[0],
        img: profiles.image[2]
    });
});

module.exports = router;
