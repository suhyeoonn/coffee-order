const Drink = require('../../../models/Drink')

const getDrinks = async (req, res) => {
  const drinks = await Drink.getDrinks()
  res.json({ success: true, drinks })
}

const addDrink = async (req, res) => {
  const { name } = req.body
  const result = await Drink.addDrink(name)
  res.json({ success: result })
}

module.exports = {
  getDrinks,
  addDrink,
}
