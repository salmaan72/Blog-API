const db = require('./../models/index_db');

var userController = {};

userController.postCredentials = function(req,res){
  var user = new db.userModel({
    username: req.body.username,
    password: req.body.password
  });
  user.save().then(function(newUser){
    res.status(200).json({
      success: true,
      data: newUser
    });
  }).catch(function(err){
    res.status(500).json({
      message: err
    });
  });
}

module.exports = userController;
