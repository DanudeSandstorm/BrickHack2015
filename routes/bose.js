var express = require('express');
var router = express.Router();

var bose = require('../APIadaptors/bose');

bose.setRoot('http://192.168.2.6:8090', function () {

});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("ok");
});


router.get('/power', function (req, res, next) {

    bose.key('press', 'POWER', function (err, data) {
        if(!err) {
            bose.key('release', 'POWER', function(err, data) {
                if(!err) {
                    return res.send(data);
                }
                return res.send(err);
            })
        } else {
            return res.send(err);
        }

    });


});

router.get('/volumeup', function (req, res, next) {
    bose.key('press', 'VOLUME_UP', function (err, data) {
        if(!err) {
            bose.key('release', 'VOLUME_UP', function(err, data) {
                if(!err) {
                    return res.send(data);
                }
                return res.send(err);
            })
        } else {
            return res.send(err);
        }

    });
});

router.get('/volumedown', function (req, res, next) {
    bose.key('press', 'VOLUME_DOWN', function (err, data) {
        if(!err) {
            bose.key('release', 'VOLUME_DOWN', function(err, data) {
                if(!err) {
                    return res.send(data);
                }
                return res.send(err);
            })
        } else {
            return res.send(err);
        }
    });

});

router.get('/play_pause', function (req, res, next) {
    bose.key('press', 'PLAY_PAUSE', function (err, data) {
        if(!err) {
            bose.key('release', 'PLAY_PAUSE', function(err, data) {
                if(!err) {
                    return res.send(data);
                }
                return res.send(err);
            })
        } else {
            return res.send(err);
        }
    });

});

router.get('/next_track', function (req, res, next) {
    bose.key('press', 'NEXT_TRACK', function (err, data) {
        if(!err) {
            bose.key('release', 'NEXT_TRACK', function(err, data) {
                if(!err) {
                    return res.send(data);
                }
                return res.send(err);
            })
        } else {
            return res.send(err);
        }
    });

});




module.exports = router;
