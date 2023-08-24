const myMD = require('../model/product.model')
var mongodb = require('mongodb')
exports.listProduct = async (req, res, next) => {
    //lay het du lieu
    // var list = await myMD.proModel.find()
    //lay du lieu cua bang product va them name cua bang cat
    // var list = await myMD.proModel.find().populate('id_cat','name')
    //Tìm kiếm theo name
    // var search = 'Ma'
    // var list = await myMD.proModel.find({name: new RegExp(search, 'i') })

    //tham so de loc
    let dieu_kien_loc = null
    if (req.query.name != undefined) {
        dieu_kien_loc = { name: req.query.name }
    } else if (req.query.price != undefined) {
        dieu_kien_loc = { price: req.query.price }
    } else if (req.query.id_cat != undefined) {
        dieu_kien_loc = { id_cat: new mongodb.ObjectId(`${req.query.id_cat}`) }
    }
    let list = await myMD.proModel.find(dieu_kien_loc)

    res.send(list)
}
exports.addProduct = async (req, res, next) => {
    try {
        let { name, price, image, description, id_cat } = req.body
        if (!name || !price || !image || !description, !id_cat) {
            return res.send({ err: 'Không được để trống dữ liệu' })
        }
        await myMD.proModel.create({ name, price, image, description, id_cat: new mongodb.ObjectId(`${id_cat}`) })
        res.send("Them san pham thanh cong")
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
}
exports.updateProduct = async (req, res, next) => {
    try {
        let { name, price, image, description, id_cat } = req.body
        if (!name || !price || !image || !description) {
            return res.send({ err: 'Không được để trống dữ liệu' })
        }
        await myMD.proModel.updateOne({ _id: new mongodb.ObjectId(`${req.params.id}`) }, { $set: { name, price, id_cat } })
        res.send("Sua san pham thanh cong")
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
}
exports.deleteProduct = async (req, res, next) => {
    try {
        if(!_id){
            return res.send({status: 500,message: 'Loi khong the xoa'})
        }
        await myMD.proModel.deleteOne({ _id: new mongodb.ObjectId(`${req.params.id}`) })
        res.send('Xoa san pham thanh cong')
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
}