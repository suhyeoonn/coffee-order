const Bill = require('../../../models/Bill')

const createBill = async (req, res) => {
  const { title, description, nickname } = req.body
  const result = await Bill.createBill(title, description, nickname)
  res.send({ success: result })
}

const closeBill = async (req, res) => {
  const { id } = req.params
  const result = await Bill.updateBill(id)
  res.json({ success: result })
}

const getOrders = async (req, res) => {
  const { id } = req.params
  const { drinkId, type } = req.query
  console.log(drinkId)
  let rows = null
  if (drinkId) {
    rows = await Bill.getOrderers(id, drinkId, type)
  } else {
    rows = await Bill.getOrders(id)
  }
  res.json({ success: true, rows })
}

const addOrder = (req, res) => {
  const { id } = req.params
  res.json({ success: true, id })
}

module.exports = {
  createBill,
  closeBill,
  getOrders,
  addOrder,
}
