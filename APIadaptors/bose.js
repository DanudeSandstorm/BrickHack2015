var request = require('request');
var parser = require('xml2json');
var rootPath = "";


module.exports = {
    setRoot: function (pth, cb) {
        rootPath = pth;
        cb(null, true);
    },

    key: function (press, keyName, cb) {

        var rqBody = '<key state="'+ press + '" sender="Gabbo">' + keyName + '</key>';

        request.post(  {
            url:rootPath + '/key',
            body : rqBody,
            headers: {'Content-Type': 'text/xml'}
        }, function (err, res, body) {

           // console.log(parser.toJson(body));
            if (!err) {
                cb(null, parser.toJson(body));
            } else {
                console.log(err);
                cb(err);
            }
        });
    },

    getSong: function(cb){
        request.post(  {
            url:rootPath + '/now_playing',
            headers: {'Content-Type': 'text/xml'}
        }, function (err, res, body) {


            body=parser.toJson(body);
            console.log(body);
            if (!err) {
                cb(null, body);
            } else {
                console.log(err);
                cb(err);
            }
        });
    }


};