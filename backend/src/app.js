const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

const bills = require('./routes/bills')
const drinks = require('./routes/drinks')

app.use(express.json())
app.use(cors())

app.use('/bills', bills)
app.use('/drinks', drinks)

module.exports = app
