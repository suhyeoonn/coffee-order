const Drink = require('../../models/Drink')

const getDrinks = async (req, res) => {
  const drinks = await Drink.getDrinks()
  res.json(drinks)
}

const addDrink = async (req, res) => {
  const { name } = req.body
  const id = await Drink.addDrink(name)
  res.json({
    id,
    name,
  })
}

module.exports = {
  getDrinks,
  addDrink,
}
