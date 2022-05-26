const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    mail:{type: String, require:true, unique:true},
    sifre:{type: String, require:true}
})


module.exports = mongoose.model('User', UserSchema)