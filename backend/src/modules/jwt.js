const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

const sign = (nickname) => {
  const payload = { nickname }
  const token = jwt.sign(payload, secret, { expiresIn: '1h' })
  return token
}
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

module.exports = {
  sign, verify
}
