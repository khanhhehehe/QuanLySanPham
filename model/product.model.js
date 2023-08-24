const db = require('./db')
//tao cau truc
const proSchema = new db.mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    image: { type: String },
    description: { type: String },
    id_cat: { type: db.mongoose.Schema.Types.ObjectId, ref: 'catModel' }
}, { collection: 'tb_product' })
//tao model
let proModel = db.mongoose.model('proModel', proSchema);
//dinh nghia cho the loai
const catSchema = new db.mongoose.Schema(
    {
        name: { type: String, required: true }
    }, { collection: 'tb_cat' }
)
let catModel = db.mongoose.model('catModel', catSchema)
module.exports = { proModel, catModel }