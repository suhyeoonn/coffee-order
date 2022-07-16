const express = require('express')
const ctrl = require('./ctrl')

const route = express.Router()

route.post('/signUp', ctrl.signUp)
route.post('/signIn', ctrl.signIn)

module.exports = route
