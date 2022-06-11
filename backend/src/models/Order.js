const db = require('../config/db')

class Order {
  static async getOrders(id) {
    const conn = await db.connection()
    const query = 'SELECT * FROM orders WHERE billId = ?'
    const [rows] = await conn.execute(query, [id])
    return rows
  }

  static async getOrderers(billId, drinkId, type) {
    const conn = await db.connection()
    console.log(billId, drinkId, type)
    const query = 'SELECT * FROM orders WHERE billId = ? AND drinkId = ? AND drinkType = ?'
    const [rows] = await conn.execute(query, [billId, drinkId, type])
    return rows
  }

  static async addOrder(order) {
    const { billId, drinkId, drinkType, nickname, request } = order
    const conn = await db.connection()
    const query =
      'INSERT INTO orders(billId, drinkId, nickname, drinkType, request) VALUES(?, ?, ?, ?, ?)'
    const [rows] = await conn.execute(query, [billId, drinkId, nickname, drinkType, request])
    return rows.insertId
  }
}

module.exports = Order
