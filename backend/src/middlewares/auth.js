const jwt = require('jsonwebtoken')
const verify = (token) => {
  try {
    const decode = jwt.verify(token, process.env.SECRET)
    console.log(decode)
    return { decode, error: null }
  } catch (err) {
    if (err.message === 'jwt expired') {
      return { error: 'expired token' }
    } else {
      return { error: 'invalid token' }
    }
  }
}
const checkAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  if (!authHeader) {
    res.status(401).send('error')
    return
  }
  const [_, token] = authHeader.split(' ')
  const { decode, error } = verify(token)
  if (error) {
    res.status(401).json({error})
    return
  }
  next()
}

module.exports = {
  checkAuth
}
