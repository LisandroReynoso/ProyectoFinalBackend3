import jwt from 'jsonwebtoken'
import configEnv from '../config/configEnv.js'
import { response } from 'express'

const authenticateToken = (require, response, next) => {
    const token = require.cookies.token
    if (!token) {
        return response.status(401).json({ message: 'Acceso denegado: no se proporciono token' })
    }

    try {
        const decoded = jwt.verify(token, config.SECRET_KEY)
        if (require.session.user && require.session.user._id === decoded._id){
            next()
        } else {
            return response.status(401).json({ message: 'acceso denegado: sesion no coincide con el token'})
        }
    } catch (error) {
        response.status(403).json({ message: 'Token no valido'})
    }
}

export default authenticateToken