function obtainUsers(num, callback) {
    var restify = require('restify');

    var client = restify.createJSONClient({
        url: 'http://api.randomuser.me'
    });

    client.get('/?results=' + num, function(err, req, res, obj) {
        if (!err) {
            var results = obj.results;
            console.log(res);
            callback(results);
        } else {
            console.log(err);
        }
    });
}

module.exports = obtainUsers;
