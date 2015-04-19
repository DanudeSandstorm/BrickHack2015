var express = require('express');
var router = express.Router();

var hotness = require('../APIadaptors/hotnessfetcher');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("ok");
});