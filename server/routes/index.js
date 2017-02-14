var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

var userCtrl = require('../controllers/user');
var config = require('../config');
var logCtrl = require("../controllers/log");
var settingsCtrl = require("../controllers/settings");

var auth = jwt({
  secret: config.secretKey
});

router.get('/user', logCtrl.createLog, userCtrl.findAllUsers);
router.get('/user/:id', userCtrl.findUserById);
router.post('/login', logCtrl.createLog, userCtrl.login);
router.post('/user', userCtrl.createUser);
router.put('/user', userCtrl.updateUser);
router.delete('/user?', userCtrl.deleteUser);

router.get("/log?", auth, logCtrl.findAllLogs);
router.delete("/log", auth, logCtrl.deleteAllLogs);

router.get("/settings", settingsCtrl.findSettings);
router.put("/settings", auth, settingsCtrl.updateSettings);
router.delete("/settings", auth, settingsCtrl.deleteSettings);
router.get("/settings/dbbu", auth, settingsCtrl.doDBBackup);

module.exports = router;