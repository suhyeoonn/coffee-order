const connection = require('../config/db')

class Drink {
  static async getDrinks() {
    const conn = await connection()
    const [rows] = await conn.execute('SELECT * FROM drinks')
    return rows
  }
  static async addDrink(name) {
    const conn = await connection()
    await conn.execute('INSERT INTO drinks(drinkName) VALUES(?)', [name])
    return true
  }
}

module.exports = Drink
