var express = require('express')
var router = express.Router()
var catCtrl = require('../controller/cat.controller')
router.get('/', catCtrl.listCat);
router.post('/add-cat', catCtrl.addCat);
router.put('/update-cat/:id', catCtrl.updateCat);
router.delete('/delete-cat/:id', catCtrl.deleteCat);
module.exports = router