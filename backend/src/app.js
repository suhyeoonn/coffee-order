const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

const bills = require('./routes/bills')
const drinks = require('./routes/drinks')
const auth = require('./routes/auth')

app.use(express.json())
app.use(cors())

app.use('/bills', bills)
app.use('/drinks', drinks)
app.use('/', auth)

module.exports = app
