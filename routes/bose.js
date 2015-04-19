var express = require('express');
var router = express.Router();

var bose = require('../APIadaptors/bose');

bose.setRoot('http://192.168.2.6:8090', function() {

});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("ok");
});


router.get('/power', function(req, res, next) {

    bose.key('press', 'POWER', function(err, data) {
        //if(!err) {
        //    bose.key('release', 'POWER', function(err, data) {
        //        if(!err) {
        //            res.send('success');
        //        }
        //    })
        //}
        res.send("ok");
    });


});

module.exports = router;
