var request = require('request');
var parser = require('xml2json');
var rootPath = "";


var parserOptions = {
    sanitize: false
};

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
                cb(null, parser.toJson(body, parserOptions));
            } else {
                console.log(err);
                cb(err);
            }
        });
    },


    getSong: function(cb){
        request.get(  {
            url:rootPath + '/now_playing',
            headers: {'Content-Type': 'text/xml'}
        }, function (err, res, body) {


            body=parser.toJson(body, parserOptions);
            //console.log(body);
            if (!err) {
                cb(null, body);
            } else {
                console.log(err);
                cb(err);
            }
        });
    },

    getSources: function(cb) {
        request.get({
            url: rootPath + '/sources',
            headers: {'Content-Type': 'text/xml'}
        }, function (err, res, body) {


            body = parser.toJson(body, parserOptions);
            //console.log(body);
            if (!err) {
                cb(null, body);
            } else {
                console.log(err);
                cb(err);
            }
        });
    },

    search: function(cb, source, sourceAccount, string) {
        request.post({
            url: rootPath + '/searchStation', //Pandora only
            headers: {'Content-Type': 'text/xml'}
        }, function (err, res, body) {

            body = parser.toJson(body, parserOptions);
            if (!err) {
                cb(null, body);
            } else {
                console.log(err);
                cb(err);
            }
        })
    }

};