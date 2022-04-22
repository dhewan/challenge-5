var express = require('express');
var router = express.Router();

/* GET home page. */

router.use("/cars", require('./cars'));
router.get('/', (req,res) => {
    res.render('index', {data: {}})
})
router.get('/cars/create', (req,res) => {
    res.render('index-addCar', {data: {}})
})
router.get('/cars/update', (req,res) => {
    res.render('index-updateCars', {data: {}})
})

module.exports = router;
