const db = require('../config/db')

class Order {
  static async getOrders(id) {
    const conn = await db.connection()
    const query = `
      SELECT o.id, drinkId, name as drinkName,
        count(case when drinkType=0 then 1 end) as hot,
        count(case when drinkType=1 then 1 end) as ice
      FROM orders o 
      JOIN drinks d on o.drinkId = d.id 
      WHERE billId = ?
      GROUP BY drinkId`
    const [rows] = await conn.execute(query, [id])
    return rows
  }

  static async getOrderers(billId, drinkId) {
    const conn = await db.connection()
    const query = 'SELECT nickname, drinkType, request FROM orders WHERE billId = ? AND drinkId = ?'
    const [rows] = await conn.execute(query, [billId, drinkId])
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
