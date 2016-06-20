var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var userCtrl = require('../controllers/user');
var config = require('../config');

var auth = jwt({
  secret: config.secretKey,
  userProperty: 'payload'
});

router.get('/user', userCtrl.findAllUsers);
router.get('/user/:id', userCtrl.findUserById);
router.post('/login', userCtrl.login);
router.post('/user', userCtrl.createUser);
router.put('/user', userCtrl.updateUser);
router.delete('/user', userCtrl.deleteUser);

module.exports = router;