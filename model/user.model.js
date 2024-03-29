const db = require('./db')
const userSchema = new db.mongoose.Schema({
    username: {type: String, required: true},
    passwd: {type: String, required: true},
    email: {type: String, required: true},
    id_role: {type: String, required: true},
},{collection: 'tb_user'})
let userModel = db.mongoose.model('userModel', userSchema)
module.exports = {userModel}