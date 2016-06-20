var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user');

router.get('/user', userCtrl.findAllUsers);
router.get('/user:id', userCtrl.findUser);
router.post('/user', userCtrl.createUser);
router.put('/user:id', userCtrl.updateUser);
router.delete('/user:id', userCtrl.deleteUser);

module.exports = router;