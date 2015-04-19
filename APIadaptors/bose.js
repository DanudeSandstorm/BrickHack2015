var request = require('request');
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