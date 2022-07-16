const db = require('../config/db')

class Auth {
  static async createUser(nickname, password) {
    const conn = await db.connection()
    const sql = `INSERT INTO users(nickname, password) VALUE (?, ?)`
    await conn.execute(sql, [nickname, password])
    return true
  }
  static async getUser(nickname, password) {
    const conn = await db.connection()
    const sql = `SELECT * FROM users WHERE nickname=? AND password=?`
    const [rows] = await conn.execute(sql, [nickname, password])
    return rows[0]
  }
}

module.exports = Auth
