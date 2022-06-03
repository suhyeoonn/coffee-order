const express = require('express')
const { getDrinkList, addDrink } = require('./ctrl')

const route = express.Router()

route.get('/', getDrinkList)
route.post('/', addDrink)

module.exports = route
