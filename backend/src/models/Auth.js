const db = require('../config/db')

class Auth {
  static async createUser(nickname, password) {
    const conn = await db.connection()
    const sql = `INSERT INTO users(nickname, password) VALUE (?, ?)`
    await conn.execute(sql, [nickname, password])
    return true
  }
}

module.exports = Auth
