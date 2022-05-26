const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    yorumyeri:{type: String, require:true},
})

module.exports = mongoose.model('Post', PostSchema)