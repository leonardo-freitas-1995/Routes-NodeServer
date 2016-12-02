var encryption = require('../services/encryption');

module.exports = function(app){

    var User = app.models.user;

    var controller = {};

   controller.updateUser = function(req, res){
        var newUserData = req.body;

       if (newUserData.password){
           newUserData.salt = encryption.createSalt();
           newUserData.password = encryption.hashPwd(newUserData.salt, newUserData.password)
       }

       User.update({_id: req.params.id}, newUserData, function(err){
           if (err){
               res.send({success: false, error: err, reason: "common.connectionError"});
           }
           else{
               res.send({success: true});
           }
       })
   };

   controller.createUser = function(req, res){
       var salt = encryption.createSalt();
       var hash = req.body.password;
       var newUser = {
           email: req.body.email,
           name: req.body.name,
           salt,
           password: encryption.hashPwd(salt, hash),
           roles: []
       };
       
       User.create(newUser, function(err){
           if (err && err.toString().indexOf('E11000') !== -1){
               res.send({success: false, error: err, reason: "signup.duplicate"});
           }
           else if (err){
               res.send({success: false, error: err, reason: "common.connectionError"});
           }
           else{
               res.send({success: true});
           }
       })
   };

    return controller;
};