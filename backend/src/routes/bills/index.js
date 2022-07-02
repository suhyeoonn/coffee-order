const express = require('express')
const bills = require('./ctrl')
const orders = require('./orders/ctrl')

const route = express.Router()

route.post('/', bills.createBill)
route.patch('/:id', bills.checkBill, bills.closeBill)
route.get('/:id/orders', bills.checkBill, orders.getOrders)
route.post('/:id/orders', bills.checkBill, orders.addOrder)

module.exports = route
