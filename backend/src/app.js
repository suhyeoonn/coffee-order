const express = require('express')
const cors = require('cors')
const app = express()

const bills = require('./routes/bills')
const drinks = require('./routes/drinks')

app.use(express.json())
app.use(cors())

app.use('/bills', bills)
app.use('/drinks', drinks)

module.exports = app
