const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

const bills = require('./routes/bills')
const drinks = require('./routes/drinks')
const auth = require('./routes/auth')
const { checkAuth } = require('./middlewares/auth')

app.use(express.json())
app.use(cors())

app.use('/bills', checkAuth, bills)
app.use('/drinks', checkAuth, drinks)
app.use('/', auth)

module.exports = app
