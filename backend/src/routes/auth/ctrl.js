const Auth = require('../../models/Auth')
const jwt = require('../../modules/jwt')

const signUp = async (req, res) => {
  const { nickname, password } = req.body
  const result = await Auth.createUser(nickname, password)
  res.json({ success: result })
}

const signIn = async (req, res) => {
  const { nickname, password } = req.body
  const row = await Auth.getUser(nickname, password)
  if (!row) {
    res.status(400).json({ message: 'Not exist' })
    return
  }
  const token = jwt.sign(row.nickname)
  res.json({ success: true, token })
}

module.exports = {
  signUp,
  signIn
}
