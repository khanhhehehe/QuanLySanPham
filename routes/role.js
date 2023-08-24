var express = require('express');
var router = express.Router();
var roleCtrl = require("../controller/role.controller")
router.get('/', roleCtrl.listRole);
router.post('/add-role', roleCtrl.addRole);
router.put('/update-role/:id',roleCtrl.updateRole)
router.delete('/delete-role/:id',roleCtrl.deleteRole)
module.exports = router;
