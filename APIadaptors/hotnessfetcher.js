/**
 * Created by John on 4/19/2015.
 */
var request = require('request');

module.exports = {
    hot: function (artist, track, cb) {
        request('http://developer.echonest.com/api/v4/song/search?api_key=HV0DZLGBZDYGTZPY1' +
            '&format=json&results=1&title=' + track + '&bucket=song_hotttnesss&artist=' + artist, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                //console.log(body);
                body = JSON.parse(body);
                //console.log(body['response'].songs[0].song_hotttnesss);
                if(body['response'].songs.length == 0) {
                    cb(null, 1);
                    return;
                }
                cb(null, 1-body['response'].songs[0].song_hotttnesss);
            }
            else {
                cb(error);
            }

        })
    }
}