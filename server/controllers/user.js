var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.createUser = function (req, res) {
  var user = new User();

  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);
  user.created = new Date();

  user.save(function (err) {
    if(err){
      return res.status(500).json(err)
    }
    return res.status(201).json({
      "massage": "user created."
    });
  })

};

module.exports.findUser = function (req, res) {
  
};

module.exports.findAllUsers = function (req, res) {
  User.find({}, function (err, users) {
    if(err){
      return res.send(500, err);
    }
    res.json(users);
  })
};

module.exports.updateUser = function (req, res) {
  User.findById(req.body._id, function (err, user) {
    user.name = req.body.name;

    user.save(function (err) {
      if(err){
        return res.status(500).json(err);
      }
      return res.json();
    })

  })
};

module.exports.deleteUser = function (req, res) {
  User.findByIdAndRemove(req.params.id, function (err) {
    if(err){
      return res.send(500, err);
    }
    return res.status(204).json({
      "message": "Successful delete user."
    })
  })
};