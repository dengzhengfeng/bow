var restify = require('restify');
var userModel = require('./user.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bow');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

function getUser(req,res,next){
  var userName = req.query.name;
  if (userName) userName = userName.trim();
  userModel.find(
      {$or:[
        {'name.title':new RegExp(userName)}
        ,{'name.first':new RegExp(userName)}
        ,{'name.last':new RegExp(userName)}
      ]}
      ,function(err,users){
        if(err) return console.log(err);
        res.send(users);
      });
  next();
}

function getUserById(req,res,next){
  var id = req.params.id;
  userModel.findById(id,function(err,user){
    if(err) return console.log(err);
    res.send(user);
  });
  next();
}

function delUser(req,res,next){
  var id = req.params.id;
  userModel.findById(id,function(err,user){
    if(err) return console.log(err);
    res.send(user);
    user.remove();
  });
  next();
}

var server = restify.createServer();
server.use(restify.queryParser());
//得到用户信息
server.get('/bow/user',getUser);
server.get('/bow/:id',getUserById);
//删除用户信息
server.del('/bow/user/:id',delUser);

server.listen(8080,function(){
  console.log('%s listening at %s', server.name, server.url);
});
