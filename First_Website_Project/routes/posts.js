const express = require('express')
const router=express.Router()
const Post = require('../models/Post')


router.get('/new',(req,res)=>{
    if(req.session.userId){
       return res.render('site2/Inceleme')
    }

    res.redirect('/users/login')
})

router.post('/test', (req, res) =>{
    Post.create(req.body)
    req.session.sessionFlash={
        type:'alert alert-success',
        message:'Yorum başarılı bir şekilde yapıldı'
    }
    res.redirect('/Inceleme.html')
})



module.exports=router