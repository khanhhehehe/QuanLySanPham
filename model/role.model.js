var db = require('./db')
const roleSchema = new db.mongoose.Schema({
    name: {type: String, required: true},
    status: {type: Boolean, required: true},
},{collection: 'tb_role'})
let roleModel = db.mongoose.model('roleModel', roleSchema)
module.exports = {roleModel}