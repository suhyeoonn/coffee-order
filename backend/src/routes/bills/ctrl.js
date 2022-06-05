const Bill = require('../../../models/Bill')

const createBill = async (req, res) => {
  const { title, description, nickname } = req.body
  const addData = { title, description, nickname }
  try {
    const insertId = await Bill.createBill(addData)
    res.send({ success: true, data: { ...addData, id: insertId } })
  } catch (e) {
    console.error(e)
  }
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
