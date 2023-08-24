const myMD = require('../model/product.model')
var mongodb = require('mongodb')
exports.listCat = async (req, res, next) => {
    let list = await myMD.catModel.find()
    res.send(list)
}
exports.addCat = async (req, res, next) => {
    try {
        let { name } = req.body
        if(!name){
            return res.send({ err: 'Không được để trống dữ liệu' })
        }
        await myMD.catModel.create({ name })
        res.send("Them thanh cong")
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
}
exports.updateCat = async (req, res, next) => {
    try {
        let { name } = req.body
        if(!name){
            return res.send({ err: 'Không được để trống dữ liệu' })
        }
        await myMD.catModel.updateOne({ _id: new mongodb.ObjectId(`${req.params.id}`) }, { $set: { name } })
        res.send("Sua thanh cong")
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
}
exports.deleteCat = async (req, res, next) => {
    try {
        await myMD.catModel.deleteOne({ _id: new mongodb.ObjectId(`${req.params.id}`) })
        res.send("Xoa thanh cong")
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
}