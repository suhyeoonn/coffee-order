import Auth from '../../models/Auth'

const signUp = async (req, res) => {
  const { nickname, password } = req.body
  const result = await Auth.createUser(nickname, password)
  res.json({ success: result })
}

module.exports = {
  signUp
}
