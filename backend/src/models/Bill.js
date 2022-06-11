const db = require('../config/db')

class Bill {
  static async createBill(addData) {
    const { title, description, nickname } = addData
    const conn = await db.connection()
    const query = 'INSERT INTO bills(title, description, nickname) VALUES(?, ?, ?)'
    const [results] = await conn.query(query, [title, description, nickname])
    return results.insertId
  }

  static async updateBill(id) {
    const conn = await db.connection()
    const query = 'UPDATE bills SET closed=?, endTime = NOW() WHERE id = ?'
    await conn.execute(query, [1, id])
  }

  static async getBill(id) {
    const conn = await db.connection()
    const query = 'SELECT * FROM bills WHERE id = ?'
    const [rows] = await conn.execute(query, [id])
    return rows[0]
  }

  static async existBill(id) {
    const conn = await db.connection()
    const query = 'SELECT count(*) as count FROM bills WHERE id = ?'
    const [rows] = await conn.execute(query, [id])
    return rows[0].count > 0
  }
}

module.exports = Bill
