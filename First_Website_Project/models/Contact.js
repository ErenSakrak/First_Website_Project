const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    isim:{type: String, require:true, unique:true},
    mailadresi:{type: String, require:true},
    telefon:{type: Number, require:true},
    mesaj:{type: String, require:true}
    
})


module.exports = mongoose.model('Contact', ContactSchema)