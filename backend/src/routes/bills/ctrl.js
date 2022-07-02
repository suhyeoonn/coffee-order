const Bill = require('../../models/Bill')

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

const checkBill = async (req, res, next) => {
  const { id } = req.params
  const exist = await Bill.existBill(id)
  if (!exist) {
    res.status(400).json({ error: 'Not exist id' })
    return
  }
  next()
}

const closeBill = async (req, res) => {
  const { id } = req.params
  await Bill.updateBill(id)
  const bill = await Bill.getBill(id)
  res.json(bill)
}

module.exports = {
  createBill,
  closeBill,
  checkBill,
}
