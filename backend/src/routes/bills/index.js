const express = require('express')
const ctrl = require('./ctrl')

const route = express.Router()

route.post('/', ctrl.createBill)
route.patch('/:id', ctrl.finishBill)
route.get('/:id/orders', ctrl.getOrders)
route.post('/:id/orders', ctrl.addOrder)

module.exports = route
