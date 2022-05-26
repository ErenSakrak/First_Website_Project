const express = require('express')
const router = express.Router()
const Post=require('../models/Post')
const Contact=require('../models/Contact')

router.get('/', (req, res) => {
    console.log(req.session)
    res.render('site2/Anasayfa')
})

router.get('/Anasayfa.html', (req, res) => {
    res.render('site2/Anasayfa')
})

router.get('/Hakkimizda.html', (req, res) => {
    res.render('site2/Hakkimizda')
})

router.get('/Trendhaberler.html', (req, res) => {
    res.render('site2/Trendhaberler')
})

router.get('/Trendhaberler2.html', (req, res) => {
    res.render('site2/Trendhaberler2')
})

router.get('/Trendhaberler3.html', (req, res) => {
    res.render('site2/Trendhaberler3')
})

router.get('/Trendhaberler4.html', (req, res) => {
    res.render('site2/Trendhaberler4')
})

router.get('/Trendhaberler5.html', (req, res) => {
    res.render('site2/Trendhaberler5')
})

router.get('/GuncelHaber1.html', (req, res) => {
    res.render('site2/GuncelHaber1')
})

router.get('/GuncelHaber2.html', (req, res) => {
    res.render('site2/GuncelHaber2')
})

router.get('/GuncelHaber3.html', (req, res) => {
    res.render('site2/GuncelHaber3')
})

router.get('/Haber1.html', (req, res) => {
    res.render('site2/Haber1')
})


router.get('/Haber2.html', (req, res) => {
    res.render('site2/Haber2')
})

router.get('/Haber3.html', (req, res) => {
    res.render('site2/Haber3')
})

router.get('/Haber4.html', (req, res) => {
    res.render('site2/Haber4')
})

router.get('/Haber5.html', (req, res) => {
    res.render('site2/Haber5')
})

router.get('/Haber6.html', (req, res) => {
    res.render('site2/Haber6')
})

router.get('/Haber7.html', (req, res) => {
    res.render('site2/Haber7')
})

router.get('/Haber8.html', (req, res) => {
    res.render('site2/Haber8')
})

router.get('/Haber9.html', (req, res) => {
    res.render('site2/Haber9')
})

router.get('/Inceleme.html', (req, res) => {
    Post.find({}).then(posts => {
        res.render('site2/Inceleme', {posts:posts})
    })
})

router.get('/Iletisim.html', (req, res) => {
    Contact.find({}).then(contact => {
        res.render('site2/Iletisim', {contact:contact})
    })
})

module.exports = router