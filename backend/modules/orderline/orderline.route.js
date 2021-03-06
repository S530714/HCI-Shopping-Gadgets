const express = require('express')
const router = express.Router()
const ordercontroller = require('./orderline/orderline.controller')

router.post('/create', ordercontroller.addorder)

router.post('/delete/:id', ordercontroller.deleteorder)

router.post('/edit/:id', ordercontroller.updateorder)

router.get('/getallforuser/:userid', ordercontroller.getallorderforauser)


module.exports = router