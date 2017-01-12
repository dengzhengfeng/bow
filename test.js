var restify = require('restify');

var client = restify.createJSONClient({
    url: 'https://api.randomuser.me'
});

client.get('/?results=1', function(err, req, res, obj) {
    console.log(err);
    console.log(obj);
});
