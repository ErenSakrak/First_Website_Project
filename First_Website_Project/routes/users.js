const express = require('express')
const router = express.Router()
const User = require('../models/User')


router.get('/signup', (req, res) => {
    res.render('site2/login')
})

router.post('/signup', (req, res) =>{
    User.create(req.body, (error,user)=>{
        req.flash={
            type:'alert alert-success',
            message:'Başarılı bir şekilde kayıt oluşturuldu.'
        }
    res.redirect('/users/login')
})

})

router.get('/login', (req, res) => {
    res.render('site2/login')
})


router.post('/login',(req,res)=>{
    const{mail, sifre}=req.body
    User.findOne({mail},(error,user)=>{

        if(user){
            if(user.sifre==sifre){
                req.session.userId=user._id
                res.redirect('/')
            }else {
                
                res.redirect('/users/login')
            }
        }else{
            
            res.redirect('/users/signup')
        }

    })
})


router.get('/logout', (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/')
    })
    
})
module.exports = router