var userModel = require('./user.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

userModel.find(function(err,users){
  if(err) return console.log(err);
  else {
    console.log('test');
    console.log(users);
  }
});
