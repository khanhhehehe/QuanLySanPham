const myMD = require('../model/user.model')
var mongodb = require('mongodb')
exports.listUser = async (req, res, next) => {
    let dieu_kien_loc = null
    if (req.query.username != undefined) {
        dieu_kien_loc = { username: req.query.username }
    }else if(req.query.email != undefined){
        dieu_kien_loc = { email: req.query.email }
    }else if(req.query.id_role != undefined){
        dieu_kien_loc = { id_role: new mongodb.ObjectId(`${req.query.id_role}`) }
    }
    let list = await myMD.userModel.find(dieu_kien_loc)
    console.log(list);
    res.send(list)
}
exports.addUser = async (req, res, next) => {
    try {
        let { username, passwd, email, id_role } = req.body
        if (!username || !passwd || !email || !id_role) {
            return res.send({ err: 'Không được để trống dữ liệu' })
        }
        let userAvailable = await myMD.userModel.findOne({ username })
        if (userAvailable) {
            return res.send({ err: 'Tên người dùng đã tồn tại' })
        }
        await myMD.userModel.create({ username, passwd, email, id_role: new mongodb.ObjectId(`${id_role}`) })
        res.send("Them thanh cong")
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
}
exports.updateUser = async (req, res, next) => {
    try {
        let { username, passwd, email, id_role } = req.body
        if (!username || !passwd || !email || !id_role) {
            return res.send({ err: 'Không được để trống dữ liệu' })
        }
        await myMD.userModel.updateOne({ _id: new mongodb.ObjectId(`${req.params.id}`) }, { $set: { username, passwd, email, id_role: new mongodb.ObjectId(`${id_role}`) } })
        res.send("Sua thanh cong")
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
}
exports.deleteUser = async (req, res, next) => {
    try {
        if(!_id){
            return res.send({status: 500,message: 'Loi khong the xoa'})
        }
        await myMD.userModel.deleteOne({ _id: new mongodb.ObjectId(`${req.params.id}`) })
        res.send("Xoa thanh cong")
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
}