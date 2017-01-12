var mongoose = require('mongoose');

var userName = mongoose.Schema({
  title:String,
  first:String,
  last:String
});

var userLocation = mongoose.Schema({
  street:String,
  city:String,
  state:String,
  postcode:String
});

var userPicture = mongoose.Schema({
  large:String,
  medium:String,
  thumbnail:String
});

var userSchema = mongoose.Schema({
  gender:String,
  name:userName,
  location:userLocation,
  email:String,
  registered:String,
  dob:String,
  phone:String,
  call:String,
  picture:userPicture
})

var userModel = mongoose.model('userDoc',userSchema);
module.exports = userModel;
