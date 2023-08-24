var express = require('express');
var router = express.Router();
var productCtrl = require("../controller/product.controller")
router.get('/', productCtrl.listProduct);
router.post('/add-pro', productCtrl.addProduct);
router.put('/update-pro/:id',productCtrl.updateProduct)
router.delete('/delete-pro/:id',productCtrl.deleteProduct)
module.exports = router;
