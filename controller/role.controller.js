const myMD = require('../model/role.model')
var mongodb = require('mongodb')
exports.listRole = async (req, res, next) => {
    let list = await myMD.roleModel.find()
    res.send(list)
}
exports.addRole = async (req, res, next) => {
    try {
        let { name, status } = req.body
        if(!name || !status){
            return res.send({ err: 'Không được để trống dữ liệu' })
        }
        await myMD.roleModel.create({ name, status })
        res.send("Them thanh cong")
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
}
exports.updateRole = async (req, res, next) => {
    try {
        let { name, status } = req.body
        if(!name || !status){
            return res.send({ err: 'Không được để trống dữ liệu' })
        }
        await myMD.roleModel.updateOne({ _id: new mongodb.ObjectId(`${req.params.id}`) }, { $set: { name, status } })
        res.send("Sua thanh cong")
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
}
exports.deleteRole = async (req, res, next) => {
    try {
        if(!_id){
            return res.send({status: 500,message: 'Loi khong the xoa'})
        }
        await myMD.roleModel.deleteOne({ _id: new mongodb.ObjectId(`${req.params.id}`) })
        res.send("Xoa thanh cong")
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
}