import jwt from 'jsonwebtoken'
import config from '../config/configEnv.js'

const secretKey = config.SECRET_KEY

const generateToken = (user) => {
    return jwt.sign(user, secretKey, { expiresIn: '1h'})
}

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                reject(err)
            } else {
                resolve(decoded)
            }
        })
    })
}

export { generateToken, verifyToken }