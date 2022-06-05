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
    const query = 'UPDATE bills SET status=? AND endTime = NOW() WHERE seq = ?'
    const CLOSE_STATUS = 1
    await conn.execute(query, [CLOSE_STATUS, id])
    return true
  }

  static async getOrders(id) {
    const conn = await db.connection()
    const query = 'SELECT * FROM orders WHERE billSeq = ?'
    const [rows] = await conn.execute(query, [id])
    return rows
  }

  static async getOrderers(billId, drinkId, type) {
    const conn = await db.connection()
    console.log(billId, drinkId, type)
    const query = 'SELECT * FROM orders WHERE billSeq = ? AND drinkSeq = ? AND drinkType = ?'
    const [rows] = await conn.execute(query, [billId, drinkId, type])
    return rows
  }
}

module.exports = Bill
