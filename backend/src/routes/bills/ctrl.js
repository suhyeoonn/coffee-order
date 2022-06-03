const createBill = (req, res) => {
  const { nickname, orderName, description } = req.body

  const data = {
    nickname,
    orderName,
    description,
  }

  res.send(data)
}

const finishBill = (req, res) => {
  const { id } = req.params
  res.json({ success: true, id })
}

const getOrders = (req, res) => {
  const { id } = req.params
  const { drink, type } = req.query
  res.json({ success: true, id, drink, type })
}

const addOrder = (req, res) => {
  const { id } = req.params
  res.json({ success: true, id })
}

module.exports = {
  createBill,
  finishBill,
  getOrders,
  addOrder,
}
