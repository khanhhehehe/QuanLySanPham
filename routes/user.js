var express = require('express');
var router = express.Router();
var userCtrl = require("../controller/user.controller")
router.get('/', userCtrl.listUser);
router.post('/add-user', userCtrl.addUser);
router.put('/update-user/:id',userCtrl.updateUser)
router.delete('/delete-user/:id',userCtrl.deleteUser)
module.exports = router;
