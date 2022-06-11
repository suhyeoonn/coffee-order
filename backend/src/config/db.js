const mysql = require('mysql2/promise')
const config = require('./config')

const connection = async () =>
  mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  })

module.exports = { connection }
