var express = require('express');
var router = express.Router();

var hotness = require('../APIadaptors/hotnessfetcher');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("ok");
});

router.get('/en', function (req, res, next) {
    var artist=req.query['artist'];
    var track=req.query['songname'];

    hotness.hot(artist, track, function (err, data) {
        if (!err) {
            console.log(data);
            return res.send({hotness:data});
        }
        else{
            return res.send(err);
        }
    });



});

module.exports = router;