const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')


router.get('/Iletisim', (req, res) => {
    res.render('site2/Iletisim')
})

router.post('/test', (req, res) =>{
    Contact.create(req.body)
    res.redirect('/')
})


module.exports = router