const Order = require('../../../models/Order')

const getOrders = async (req, res) => {
  const { id } = req.params
  const { drinkId, type } = req.query

  let rows = null
  if (drinkId && type) {
    rows = await Order.getOrderers(id, drinkId, type)
  } else {
    // TODO: count
    rows = await Order.getOrders(id)
  }
  res.json(rows)
}

const addOrder = async (req, res) => {
  const { id } = req.params
  const { drinkId, drinkType, nickname, request } = req.body

  const order = { billId: id, drinkId, drinkType, nickname, request }
  const insertId = await Order.addOrder(order)
  res.json({ ...order, id: insertId })
}

module.exports = {
  getOrders,
  addOrder,
}
