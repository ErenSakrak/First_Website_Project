const mongoose = require('mongoose');
const Post=require('./models/Post')



mongoose.connect('mongodb://localhost/projecttest_db',{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

Post.create({
    title:'Benim İlk Post İçeriğim'
},(error,post)=>{
    console.log(error,post)
})