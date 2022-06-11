const Bill = require('../../models/Bill')
const Order = require('../../models/Order')

const createBill = async (req, res) => {
  const { title, description, nickname } = req.body
  const addData = { title, description, nickname }
  try {
    const insertId = await Bill.createBill(addData)
    res.json({ ...addData, id: insertId })
  } catch (e) {
    console.error(e)
  }
}

const closeBill = async (req, res) => {
  const { id } = req.params
  const exist = await Bill.existBill(id)
  if (!exist) {
    res.json({ error: 'Not exist id' })
    return
  }
  await Bill.updateBill(id)
  const bill = await Bill.getBill(id)
  res.json(bill)
}

const getOrders = async (req, res) => {
  const { id } = req.params
  const { drinkId, type } = req.query

  const exist = await Bill.existBill(id)
  if (!exist) {
    res.json({ error: 'Not exist id' })
  }

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
  const {drinkId, drinkType, nickname, request} = req.body

  const exist = await Bill.existBill(id)
  if (!exist) {
    res.json({ error: 'Not exist id' })
  }

  const order = {billId: id, drinkId, drinkType, nickname, request}
  const insertId = await Order.addOrder(order)
  res.json({ ...order, id: insertId })
}

module.exports = {
  createBill,
  closeBill,
  getOrders,
  addOrder,
}
