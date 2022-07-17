const jwt = require('../modules/jwt')

const checkAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  if (!authHeader) {
    res.status(401).send('error')
    return
  }
  const [_, token] = authHeader.split(' ')
  const { decode, error } = jwt.verify(token)
  if (error) {
    res.status(401).json({ error })
    return
  }
  next()
}

module.exports = {
  checkAuth
}
