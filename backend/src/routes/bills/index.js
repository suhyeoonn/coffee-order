const express = require('express')
const ctrl = require('./ctrl')

const route = express.Router()

route.post('/', ctrl.createBill)
route.patch('/:id', ctrl.checkBill, ctrl.closeBill)
route.get('/:id/orders', ctrl.checkBill, ctrl.getOrders)
route.post('/:id/orders', ctrl.checkBill, ctrl.addOrder)

module.exports = route
