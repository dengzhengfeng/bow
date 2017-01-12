var mongoose = require('mongoose');
var random = require('./random.js');
var userModel = require('./user.js');
mongoose.connect('mongodb://localhost/bow');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function(){
  random(100,function(users){
    for(x in users){
      var user = users[x];
      var userEntity = new userModel(users[x]);
      userEntity.save(function(err,user){
        if (err) return console.log(err);
        else console.log(user.name);
      });
    }
  });
});
