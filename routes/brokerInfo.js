const express = require('express')
const router = express.Router()
const controller = require('./../controllers/brokerInfo')


router.get('/:brokerid', controller.getBrokerId)


module.exports = router
